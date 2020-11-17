import React from 'react'
import PropTypes from 'prop-types'
import { Workbook } from 'exceljs';
import saveAs from 'file-saver';
import moment from 'moment'
import SMaterialTable from '../../components/SMaterialTable';
const ReportView = props => {

    let headers = [{
        header: 'test1',
        key: 'test1',
        width: 15,
        style:{
            font: { name: 'Arial Black' }
        }
    }, {
        header: 'test2',
        key: 'test2',
        width: 50
    }];
    const fakedata =()=>{
        let arr =[];
            for (let i = 0; i < 1000; i++) {
                const element = {
                    test1:'test'+i,
                    test2:'test'+i+1,
                };
                arr.push(element);
            }
            return arr
        }
    let content = fakedata();
    function writeExcel(filename, headers, content) {
        if (!filename) {
            filename = 'Untitled';
        }
    
        let workbook = new Workbook();
    
        let d = new Date();
        workbook.created = d;
        workbook.modified = d;
    
        let sheet = workbook.addWorksheet('sheet', {properties:{tabColor:{argb:'FF00FF00'}}});
        
        sheet.columns = headers;
    
        for (let item of content) {
            sheet.addRow(item);
        }
        sheet.getCell('A2').value = 1.6;
        return workbook.xlsx.writeBuffer().then(function (buffer) {
            saveAs(new Blob([buffer], {
                type: "application/octet-stream"
            }), `${filename}-${moment().format('YYYY-MM-DD__HH:mm:ss')}.xlsx`);
        });
    }
    const handleClick =()=>{
        writeExcel('test', headers, content);
    }
    
    return (
        <div style={{width:'85vw',overflow:'auto',marginTop:50}}>
             <button onClick={handleClick}>Export Excel</button>
             <SMaterialTable></SMaterialTable>
        </div>
    )
}

ReportView.propTypes = {

}

export default ReportView
