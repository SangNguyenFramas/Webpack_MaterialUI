import React, { forwardRef, useEffect, useState } from "react";
import * as dateFns from 'date-fns'
import MomentUtils from "@date-io/moment";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
import MaterialTable, { MTableToolbar } from "material-table";
import { ReportApi } from "../services/userApi copy";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import CustomDatePicker from "./CustomDatePicker";
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import moment from 'moment'
const columnsAlarm = [
  {
    title: "Incomming Time",
    field: "IncommingTime",
    type: "datetime",
    cellStyle: { border: "1px solid #515151" },
    filterComponent:props=><CustomDatePicker {...props}></CustomDatePicker>
  },
  { title: "Name", field: "Name",cellStyle: { border: "1px solid #515151" }, },
  { title: "Alarm Text", field: "AlarmText",cellStyle: { border: "1px solid #515151" }, },
  {
    hidden:true,
    title: "Alarm Class",
    field: "AlarmClass",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    hidden:true,
    title: "Alarm Group",
    field: "AlarmGroup",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    hidden:true,  
    title: "Trigger Tag",
    field: "TriggerTag",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    title: "Value",
    field: "Value",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    hidden:true,
    title: "Limit",
    field: "Limit",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    hidden:true,
    title: "Compare Mode",
    field: "CompareMode",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    title: "State",
    field: "State",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    title: "Outgoing Time",
    field: "OutgoingTime",
    type: "datetime",
    cellStyle: { border: "1px solid #515151"  },
    filterComponent:props=><CustomDatePicker {...props}></CustomDatePicker>
  },
  {
    hidden:true,
    title: "Ack Time",
    field: "AckTime",
    cellStyle: { border: "1px solid #515151" },
  },
  {
    hidden:true,
    title: "Alarm Type",
    field: "AlarmType",
    cellStyle: { border: "1px solid #515151" },
  },
];
const columnsData =[
  {
    title: "DateTime",
    field: "DateTime",
    type: "datetime",
    cellStyle: { border: "1px solid #515151" },
    filterComponent:props=><CustomDatePicker {...props}></CustomDatePicker>
  },
  { title: "Dòng máy nghiền thô 1", field: "DongMayNghienTho1",cellStyle: { border: "1px solid #515151" }, },
  { title: "Dòng máy nghiền thô 2", field: "DongMayNghienTho2",cellStyle: { border: "1px solid #515151" }, },
  {
    
    title: "Dòng máy nghiền tinh",
    field: "DongMayNghienTinh",
    cellStyle: { border: "1px solid #515151" },
  },
  {
  
    title: "Dòng máy ép viên 1",
    field: "DongMayEp1",
    cellStyle: { border: "1px solid #515151" },
  },
  {
  
    title: "Dòng máy ép viên 2",
    field: "DongMayEp2",
    cellStyle: { border: "1px solid #515151" },
  },
  {
  
    title: "Khối lượng cân 1",
    field: "KhoiLuongCan1",
    cellStyle: { border: "1px solid #515151" },
  },
  {
  
    title: "Khối lượng cân 2",
    field: "KhoiLuongCan2",
    cellStyle: { border: "1px solid #515151" },
  },
]
function SMaterialTable() {
  const [dataSource, setdataSource] = useState([]);
  const [exportAll, setexportAll] = useState(false);
  const [fromDate, setfromDate] = useState(new Date('2020-11-07'));
  const [toDate, settoDate] = useState(new Date('2020-11-09'));
  const [reportType, setreportType] = useState('Data');
  const [open, setOpen] = useState(false);
  // const [params, setparams] = useState({
  //   data: reportType,
  //   fromDate: fromDate,
  //   toDate: toDate,
  // })
  const handleChange = (event) => {
    setreportType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handlefromDateChange = (date) => {
    setfromDate(date);
  };
  const handletoDateChange = (date) => {
    settoDate(date);
  };
  const handlegetData=()=>{
    let params = {
      data: reportType,
      fromDate: moment(fromDate).format('YYYY-MM-DD'),
      toDate: moment(toDate).format('YYYY-MM-DD')
    }
   
    getData(params);
    // setdataSource(getData(params));
  }
  const getData = async (params) => {
    
    const res = await ReportApi.GetReportData(params);
     console.log(res);
    setdataSource(res);
  };

  function writeExcel(filename, headers, content) {
    if (!filename) {
        filename = 'Untitled';
    }

    let workbook = new Workbook();

    let d = new Date();
    workbook.created = d;
    workbook.modified = d;

    let sheet = workbook.addWorksheet('Data', {properties:{tabColor:{argb:'FF00FF00'}}});
    console.log(headers);
    let columns = [];
    const generateHeader = ()=>{
      headers.map(
        (item,key)=>{
          columns.push({
            header:item.title,
            key:item.field
          })
        }
      )
      // console.log(columns);
      sheet.columns = columns;
    }
    generateHeader();
    
    for (let item of content) {
      // console.log(content);
        sheet.addRow(item);
        // sheet.getCell('A2').value = 1.6;
    }
    
    return workbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(new Blob([buffer], {
            type: "application/octet-stream"
        }), `${filename}-${moment().format('YYYY-MM-DD__HH:mm:ss')}.xlsx`);
    });
}
  useEffect(() => {
    let params = {
      data: reportType,
      fromDate: moment(fromDate).format('YYYY-MM-DD'),
      toDate: moment(toDate).format('YYYY-MM-DD')
    }
    // console.log(params);
    getData(params);
  }, []);
  return (
    <MaterialTable
      
      icons={tableIcons}
      title={
        <div style={{marginTop:20,marginBottom:20,position:'relative'}}>
            <MuiPickersUtilsProvider  utils={DateFnsUtils} >
            <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="standard"
        label="From Date"
        format="MM/dd/yyyy"
        value={fromDate}
        InputAdornmentProps={{ position: "end" }}
        onChange={date => handlefromDateChange(date)}
        style={{marginRight:30,position:'relative'}}
        color='secondary'
      />
       <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="standard"
        label="To Date"
        format="MM/dd/yyyy"
        value={toDate}
        InputAdornmentProps={{ position: "end" }}
        onChange={date => handletoDateChange(date)}
        color='secondary'
      />
     
        </MuiPickersUtilsProvider>
        <FormControl style={{marginLeft:30}}>
        <InputLabel  color='secondary'>Report Type</InputLabel>
        <Select
        color='secondary'
          style={{minWidth:150}}
          labelId="demo-controlled-open-select-label"
          
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={reportType}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={"Data"}>Data</MenuItem>
          <MenuItem value={"Alarm"}>Alarm</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        
      </FormControl>
      <Button variant='contained' color='primary' style={{marginLeft:40,height:50}} onClick={handlegetData}>GET DATA</Button>
        </div>
      }
      columns={reportType =='Data'?columnsData:columnsAlarm}
      data={dataSource}
      options={{
        exportButton: true,
        exportAllData: exportAll,
        headerStyle: {
          backgroundColor: "#333",
          padding: "5px",
          border: "1px solid #515151",
          height:50,
          textTransform:'uppercase',
          position:'relative',
          textAlign:'center'
        }, //change header padding
        editCellStyle: {
          border: "1px solid #515151",
        },
        tableLayout:'auto',
        pageSize:10,
        pageSizeOptions:[10,20,30,40,50],
        thirdSortClick:true ,//Flag to allow unsorted state on third header click
        filtering:true,
        exportCsv: (columns, data) => {
         
          if (data.length != 0) {
            writeExcel(reportType,columns,data)
          }

        
          // alert('You should develop a code to export ' + data.length + ' rows');
        }
      }}
      localization={{
        toolbar: {
          exportCSVName: "Export as Excel",
          exportPDFName: null,
          padding: "dense",
          // exportAll:true
        },
      }}
      style={{
        color: "#faaaa",
        border: "1px solid white",
      }}
      // components={{
      //   Toolbar: props => (
      //     <div>
      //       <MTableToolbar
      //        {...props}
      //       />
      //       <div style={{padding: '0px 10px'}}>
      //        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      //       </div>
      //     </div>
      //   ),
      // }}
    />
  );
}
export default SMaterialTable;
