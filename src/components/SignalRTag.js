import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles, CardHeader, CardMedia, TextField, Button, Switch, FormControlLabel, GridList, Select
} from '@material-ui/core';
import TagFile from './SignalRTag.json';
const GenerateTagName=() =>{
    const [selectValue, setselectValue] = useState('')
    return (
    
        <Select>
          {
            TagFile.Stations[1].Channels.map((channel, channelKey) => {
              return (
              
                      channel.Devices[0].Tags.map((tag, tagKey) => 
                      (<option key={tagKey}>{tag.Path}</option>)
                      )
              )
            })
          }
        </Select>
    )
  }
  export default  GenerateTagName