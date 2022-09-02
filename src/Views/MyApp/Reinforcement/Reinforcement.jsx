import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem/ChartElem';
import InputElem from '../../../Components/InputElem/InputElem';
import CardElem from '../../../Components/CardElem/CardElem';
import TableElem from '../../../Components/TableElem/TableElem';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Reinforcement = ({
  inputsData,
  updateValue
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <CardElem
            title="Armatures inférieures"
            subtitle=" "
           >
            <div>
              <InputElem 
                data={inputsData.NbCouchesInf}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.DiamBarresInf}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.NbBarresCoucheInf}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardElem
            title="Armatures supérieures"
            subtitle=" "
           >
            <div>
              <InputElem 
                data={inputsData.NbCouchesSup}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.DiamBarresSup}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.NbBarresCoucheSup}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardElem
            title="Armatures Fût"
            subtitle=" "
           >
            <div>
              <InputElem 
                data={inputsData.Fc}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.Ft}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.DiamBarresFut}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.NbBarresFut}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CardElem
            title="Acier"
           >
            <div>
              <InputElem 
                data={inputsData.a2}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.fck}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.fctm}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.fyk}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.Klim}
                updateValue={updateValue}
              />
            </div>
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Reinforcement;
