import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OutputElem from '../../../Components/OutputElem/OutputElem';
import TableElem from '../../../Components/TableElem/TableElem';
import CardElem from '../../../Components/CardElem/CardElem';
import calculationFunctions from '../Calculations/calculations';

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

const Stability = ({
  inputsData,
  outputsData
 }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={10} sm={5}>
          <CardElem
            title="Calcul ELS"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.CrEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.CrEls}
              />
              <OutputElem 
                data={outputsData.TEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.TEls}
              />
              <OutputElem 
                data={outputsData.MEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MEls}
              />
              <OutputElem 
                data={outputsData.MrEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MrEls}
              />
              <OutputElem 
                data={outputsData.eEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.eEls}
              />
              <OutputElem 
                data={outputsData.Bon6Els}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.Bon6Els}
              />
              <OutputElem 
                data={outputsData.etatSemelleEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.etatSemelleEls}
              />
              <OutputElem 
                data={outputsData.LcEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.LcEls}
              />
              <OutputElem 
                data={outputsData.ratioCompressionSolEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.ratioCompressionSolEls}
              />
              <OutputElem 
                data={outputsData.sigmaMaxEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.sigmaMaxEls}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul ELU"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.CrElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.CrElu}
              />
              <OutputElem 
                data={outputsData.TElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.TElu}
              />
              <OutputElem 
                data={outputsData.MElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MElu}
              />
              <OutputElem 
                data={outputsData.MrElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MrElu}
              />
              <OutputElem 
                data={outputsData.eElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.eElu}
              />
              <OutputElem 
                data={outputsData.Bon6Elu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.Bon6Elu}
              />
              <OutputElem 
                data={outputsData.etatSemelleElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.etatSemelleElu}
              />
              <OutputElem 
                data={outputsData.LcElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.LcElu}
              />
              <OutputElem 
                data={outputsData.ratioCompressionSolElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.ratioCompressionSolElu}
              />
              <OutputElem 
                data={outputsData.sigmaMaxElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.sigmaMaxElu}
              />
            </div>
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Stability;
