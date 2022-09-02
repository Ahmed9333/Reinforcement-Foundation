import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem/ChartElem';
import InputElem from '../../../Components/InputElem/InputElem';
import CardElem from '../../../Components/CardElem/CardElem';
import TableElem from '../../../Components/TableElem/TableElem';

import TowerFoundation from 'C:/Users/ahmed/Desktop/TriDyme/dev/renforcement-footing-app/src/Img/TowerFoundation.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Geometry = ({
  inputsData,
  updateValue
 }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} wrap="nowrap" >
        <Grid item xs={12} sm={6} >
          <CardElem
            title="Massif"
            subtitle="Dimensions du massif"
           >
            <div>
              <InputElem 
                data={inputsData.A}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.B}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.H}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.Lf}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.Hf}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.Hms}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Sol"
            subtitle="Contrainte du sol"
           >
            <div>
              <InputElem 
                data={inputsData.sigmaels}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.sigmaelu}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.roBeton}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.roRemblai}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='App'> <img src={TowerFoundation} width="400" alt='TowerFoundation' /> </div>
        </Grid>
      </Grid>
    </div>
  );
  
}

export default Geometry;
