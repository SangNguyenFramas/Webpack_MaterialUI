import { IconButton, InputAdornment ,createMuiTheme} from '@material-ui/core';
import {MuiPickersUtilsProvider, DatePicker, KeyboardDateTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import React, { useState } from 'react'


import DateFnsUtils from '@date-io/date-fns';
import lightBlue from "@material-ui/core/colors/lightBlue";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: lightBlue["400"],
      },
    },
  },
});

  
const CustomDatePicker = (props) => {
    const [date, setDate] = useState(null);
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        clearable={true}
        label="Filter date"
        inputVariant="standard"
        variant="dialog"
        format="MM/d/yyyy"
        value={date}
        ampm={false}
        autoOk = {false}
        allowKeyboardControl
        // style={{ minWidth: 175}} 
        onChange={(event) => {
          setDate(event);
          props.onFilterChanged(props.columnDef.tableData.id, event);
        }}
        color='secondary'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <EventIcon />
              </IconButton>
            </InputAdornment>
          ),
          
        }}
        
      />
      </MuiPickersUtilsProvider>
    
    );
  };
  export default CustomDatePicker