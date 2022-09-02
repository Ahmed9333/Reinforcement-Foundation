import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem';
import InputElem from '../../../Components/InputElem';
import CardElem from '../../../Components/CardElem';
import TableElem from '../../../Components/TableElem';
import CardColumns from 'reactstrap/lib/CardColumns';

import FoundationLoads from 'C:/Users/ahmed/Desktop/TriDyme/dev/renforcement-footing-app/src/Img/FoundationLoads.png';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(21),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Loads = ({
  inputsData,
  updateValue
}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <CardElem
            title="Serviceability Limit State Forces:"
            subtitle=""
           >
            <div>
                <InputElem 
                  data={inputsData.Nels}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.VXels}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.VYels}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.MXels}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.MYels}
                  updateValue={updateValue}
                />
               </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardElem
            title="Ultimate Limit State Forces:"
            subtitle=""
           >
            <div>
                <InputElem 
                  data={inputsData.Nelu}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.VXelu}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.VYelu}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.MXelu}
                  updateValue={updateValue}
                />
                <InputElem 
                  data={inputsData.MYelu}
                  updateValue={updateValue}
                />
              </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className='App'> <img src={FoundationLoads} width="400" alt='FoundationLoads' /> </div>
        </Grid>
      </Grid>
    </div>
  )
  
}

export default Loads;