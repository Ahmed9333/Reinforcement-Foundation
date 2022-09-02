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

const ReinforcementOutputs = ({
  inputsData,
  outputsData
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Massif"
            subtitle="Massif"
           >
            <div>
              <OutputElem 
                data={outputsData.Nmassif}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.Nmassif}
              />
              <OutputElem 
                data={outputsData.NSemelle}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.NSemelle}
              />
              <OutputElem 
                data={outputsData.NPlot}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.NPlot}
              />
              <OutputElem 
                data={outputsData.NSol}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.NSol}
              />
              <OutputElem 
                data={outputsData.NFondation}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.NFondation}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul d'armature inferieur de la semelle "
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.SigmaSEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.SigmaSEls}
              />
              <OutputElem 
                data={outputsData.SigmaMoyEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.SigmaMoyEls}
              />
              <OutputElem 
                data={outputsData.QEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.QEls}
              />
              <OutputElem 
                data={outputsData.XqEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.XqEls}
              />
              <OutputElem 
                data={outputsData.MsEls}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MsEls}
              />
              <OutputElem 
                data={outputsData.SigmaSElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.SigmaSElu}
              />
              <OutputElem 
                data={outputsData.SigmaMoyElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.SigmaMoyElu}
              />
              <OutputElem 
                data={outputsData.QElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.QElu}
              />
              <OutputElem 
                data={outputsData.XqElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.XqElu}
              />
              <OutputElem 
                data={outputsData.MsElu}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.MsElu}
              />
              <OutputElem 
                data={outputsData.Mmax}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.Mmax}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul d'armature inférieures de la semelle"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.ds}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.ds}
              />
              <OutputElem 
                data={outputsData.k}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.k}
              />
              <OutputElem 
                data={outputsData.z}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.z}
              />
              <OutputElem 
                data={outputsData.AsCalcInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsCalcInf}
              />
              <OutputElem 
                data={outputsData.AsMinInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsMinInf}
              />
              <OutputElem 
                data={outputsData.AsNecessaireInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsNecessaireInf}
              />
              <OutputElem 
                data={outputsData.AsEfInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsEfInf}
              />
              <OutputElem 
                data={outputsData.sInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.sInf}
              />
              <OutputElem 
                data={outputsData.UrInf}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.UrInf}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul d'armature supérieures de la semelle"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.AsMinSup}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsMinSup}
              />
              <OutputElem 
                data={outputsData.sSup}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.sSup}
              />
              <OutputElem 
                data={outputsData.AsEfSup}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsEfSup}
              />
              <OutputElem 
                data={outputsData.UrSup}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.UrSup}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul d'armature du fut"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.df}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.df}
              />
              <OutputElem 
                data={outputsData.FrCom}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.FrCom}
              />
              <OutputElem 
                data={outputsData.AsTrac}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsTrac}
              />
              <OutputElem 
                data={outputsData.AsMinFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsMinFut}
              />
              <OutputElem 
                data={outputsData.AsNecessaireFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsNecessaireFut}
              />
              <OutputElem 
                data={outputsData.AsEfFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsEfFut}
              />
              <OutputElem 
                data={outputsData.UrFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.UrFut}
              />
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="Calcul d'armature transversale du fut"
            subtitle=" "
           >
            <div>
              <OutputElem 
                data={outputsData.AsMinTransFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsMinTransFut}
              />
              <OutputElem 
                data={outputsData.AsTransFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.AsTransFut}
              />
              <OutputElem 
                data={outputsData.sTransFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.sTransFut}
              />
              <OutputElem 
                data={outputsData.NbBarresTransFut}
                inputsData={inputsData}
                calculationFunctions={calculationFunctions.NbBarresTransFut}
              />
            </div>
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default ReinforcementOutputs;
