const calculationFunctions = {
  Nmassif: (inputs) => {
    const A = inputs.A.value;
    const B = inputs.B.value;
    const H = inputs.H.value;
    const Lf = inputs.Lf.value;
    const Hf = inputs.Hf.value;
    const Hms = inputs.Hms.value;
    const roBeton = inputs.roBeton.value;
    const roRemblai = inputs.roRemblai.value;

    return (roBeton*A*B*H+roRemblai*A*B*Hms+(roBeton-roRemblai)*Lf**(2)*(Hf+Hms))*9.81/1000;
  },
  NSemelle: (inputs) => {
    const A = inputs.A.value;
    const B = inputs.B.value;
    const H = inputs.H.value;
    const roBeton = inputs.roBeton.value;

    return roBeton*A*B*H*9.812/1000;
  },
  NPlot: (inputs) => {
    const Lf = inputs.Lf.value;
    const Hf = inputs.Hf.value;
    const Hms = inputs.Hms.value;
    const roBeton = inputs.roBeton.value;

    return Lf**2*(Hf+Hms)*roBeton*9.812/1000;
  },
  NSol: (inputs) => {
    const Lf = inputs.Lf.value;
    const Hf = inputs.Hf.value;
    const A = inputs.A.value;
    const B = inputs.B.value;
    const Hms = inputs.Hms.value;
    const roRemblai = inputs.roRemblai.value;

    return (A*B*Hf-Lf**2*(Hf+Hms))*roRemblai*9.812/1000;
  },
  NFondation: (inputs) => {
    const NSemelle = calculationFunctions.NSemelle(inputs);
    const NPlot = calculationFunctions.NPlot(inputs);
    const NSol = calculationFunctions.NSol(inputs);

    return NSemelle+NPlot+NSol;
  },
  // Calcul ELS
  CrEls: (inputs) => {
    const NFondation = calculationFunctions.NFondation(inputs);
    const Nels = inputs.Nels.value;
    
    return NFondation+Nels;
  },
  TEls: (inputs) => {
    const VXels = inputs.VXels.value;
    const VYels = inputs.VYels.value;
    
    return (VXels**(2)+VYels**(2))**(0.5);
  },
  MEls: (inputs) => {
    const MXels = inputs.MXels.value;
    const MYels = inputs.MYels.value;
    
    return (MXels**(2)+MYels**(2))**(0.5);
  },
  MrEls: (inputs) => {
    const TEls = calculationFunctions.TEls(inputs);
    const MEls = calculationFunctions.MEls(inputs);
    const H = inputs.H.value;
    const Hf = inputs.Hf.value;
    const Hms = inputs.Hms.value;
    
    return MEls+TEls*(H+Hf+Hms);
  },
  eEls: (inputs) => {
    const CrEls = calculationFunctions.CrEls(inputs);
    const MrEls = calculationFunctions.MrEls(inputs);
        
    return MrEls/CrEls;
  },
  Bon6Els: (inputs) => {
    const B = inputs.B.value;
        
    return B/6;
  },
  etatSemelleEls: (inputs) => {
    const eEls = calculationFunctions.eEls(inputs);
    const Bon6Els = calculationFunctions.Bon6Els(inputs);
        
    if (eEls < Bon6Els) {
      return "Semelle entièrement comprimée";
    } else {
      return "Semelle partiellement comprimée";
    }
  },
  LcEls: (inputs) => {
    const B = inputs.B.value;
    const eEls = calculationFunctions.eEls(inputs);
    const Bon6Els = calculationFunctions.Bon6Els(inputs);
        
    if (eEls < Bon6Els) {
      return B;
    } else {
      return (B / 2 - eEls) * 3;
    }
  },
  ratioCompressionSolEls: (inputs) => {
    const B = inputs.B.value;
    const LcEls = calculationFunctions.LcEls(inputs);
        
    return (LcEls/B)*100;
  },

  sigmaMaxEls: (inputs) => {
    const A = inputs.A.value;
    const CrEls = calculationFunctions.CrEls(inputs);
    const LcEls = calculationFunctions.LcEls(inputs);
        
    return 2*CrEls/A/LcEls;
  },

  // Calcul ELU

  CrElu: (inputs) => {
    const NFondation = calculationFunctions.NFondation(inputs);
    const Nelu = inputs.Nelu.value;
    
    return Nelu+1.35*NFondation;
  },
  TElu: (inputs) => {
    const VXelu = inputs.VXelu.value;
    const VYelu = inputs.VYelu.value;
    
    return (VXelu**(2)+VYelu**(2))**(0.5);
  },
  MElu: (inputs) => {
    const MXelu = inputs.MXelu.value;
    const MYelu = inputs.MYelu.value;
    
    return (MXelu**(2)+MYelu**(2))**(0.5);
  },
  MrElu: (inputs) => {
    const TElu = calculationFunctions.TElu(inputs);
    const MElu = calculationFunctions.MElu(inputs);
    const H = inputs.H.value;
    const Hf = inputs.Hf.value;
    const Hms = inputs.Hms.value;
    
    return MElu+TElu*(H+Hf+Hms);
  },
  eElu: (inputs) => {
    const CrElu = calculationFunctions.CrElu(inputs);
    const MrElu = calculationFunctions.MrElu(inputs);
        
    return MrElu/CrElu;
  },
  Bon6Elu: (inputs) => {
    const B = inputs.B.value;
        
    return B/6;
  },
  etatSemelleElu: (inputs) => {
    const eElu = calculationFunctions.eElu(inputs);
    const Bon6Elu = calculationFunctions.Bon6Elu(inputs);
        
    if (eElu < Bon6Elu) {
      return "Semelle entièrement comprimée";
    } else {
      return "Semelle partiellement comprimée";
    }
  },
  LcElu: (inputs) => {
    const B = inputs.B.value;
    const eElu = calculationFunctions.eElu(inputs);
    const Bon6Elu = calculationFunctions.Bon6Elu(inputs);
        
    if (eElu < Bon6Elu) {
      return B;
    } else {
      return (B/2-eElu)*3;
    }
  },
  ratioCompressionSolElu: (inputs) => {
    const B = inputs.B.value;
    const LcElu = calculationFunctions.LcElu(inputs);
        
    return LcElu/B;
  },
  sigmaMaxElu: (inputs) => {
    const A = inputs.A.value;
    const CrElu = calculationFunctions.CrElu(inputs);
    const LcElu = calculationFunctions.LcElu(inputs);
        
    return 2*CrElu/A/LcElu;
  },

  // Calcul d'armature inferieur de la semelle 

  a1Ona3: (inputs) => {
    const A = inputs.A.value;
    const a2 = inputs.a2.value;
        
    return (A-a2)/2;
  },
  Xs: (inputs) => {
    const a1Ona3 = calculationFunctions.a1Ona3(inputs);
    const Lf = inputs.Lf.value;
        
    return a1Ona3-Lf/2;
  },
  SigmaSEls: (inputs) => {
    const sigmaMaxEls = calculationFunctions.sigmaMaxEls(inputs);
    const LcEls = calculationFunctions.LcEls(inputs);
    const Xs = calculationFunctions.Xs(inputs);
        
    return sigmaMaxEls*(LcEls-Xs)/LcEls;
  },
  SigmaMoyEls: (inputs) => {
    const SigmaSEls = calculationFunctions.SigmaSEls(inputs);
    const sigmaMaxEls = calculationFunctions.sigmaMaxEls(inputs);
        
    return (SigmaSEls+sigmaMaxEls)/2;
  },
  QEls: (inputs) => {
    const SigmaMoyEls = calculationFunctions.SigmaMoyEls(inputs);
    const Xs = calculationFunctions.Xs(inputs);
    const A = inputs.A.value;
        
    return SigmaMoyEls*Xs*A;
  },
  XqEls: (inputs) => {
    const Xs = calculationFunctions.Xs(inputs);
        
    return Xs/2;
  },
  MsEls: (inputs) => {
    const QEls = calculationFunctions.QEls(inputs);
    const XqEls = calculationFunctions.XqEls(inputs);
        
    return QEls*XqEls;
  },
  SigmaSElu: (inputs) => {
    const sigmaMaxElu = calculationFunctions.sigmaMaxElu(inputs);
    const LcElu = calculationFunctions.LcElu(inputs);
    const Xs = calculationFunctions.Xs(inputs);
        
    return sigmaMaxElu*(LcElu-Xs)/LcElu;
  },
  SigmaMoyElu: (inputs) => {
    const SigmaSElu = calculationFunctions.SigmaSElu(inputs);
    const sigmaMaxElu = calculationFunctions.sigmaMaxElu(inputs);
        
    return (SigmaSElu+sigmaMaxElu)/2;
  },
  QElu: (inputs) => {
    const SigmaMoyElu = calculationFunctions.SigmaMoyElu(inputs);
    const Xs = calculationFunctions.Xs(inputs);
    const A = inputs.A.value;
        
    return SigmaMoyElu*Xs*A;
  },
  XqElu: (inputs) => {
    const Xs = calculationFunctions.Xs(inputs);
        
    return Xs/2;
  },
  MsElu: (inputs) => {
    const QElu = calculationFunctions.QElu(inputs);
    const XqElu = calculationFunctions.XqElu(inputs);
        
    return QElu*XqElu;
  },
  Mmax: (inputs) => {
    const MsEls = calculationFunctions.MsEls(inputs);
    const MsElu = calculationFunctions.MsElu(inputs);
        
    return Math.max(MsEls,MsElu);
  },

  // Calcul d'armature inférieures de la semelle

  ds: (inputs) => {
    const H = inputs.H.value;
        
    return 0.9*H;
  },
  k: (inputs) => {
    const B = inputs.B.value;
    const fck = inputs.fck.value;
    const Mmax = calculationFunctions.Mmax(inputs);
    const ds = calculationFunctions.ds(inputs);
        
    return Mmax/(B*ds**2*fck*1000*0.85/1.5);
  },
  z: (inputs) => {
    const H = inputs.H.value;
    const k = calculationFunctions.k(inputs);
        
    return 0.9*H/2*(1+Math.sqrt(1-3.53*k));
  },
  AsCalcInf: (inputs) => {
    const fyk = inputs.fyk.value;
    const MsElu = calculationFunctions.MsElu(inputs);
    const z = calculationFunctions.z(inputs);

    return MsElu/(fyk*1000/1.15*z)*10000;
  },
  AsMinInf: (inputs) => {
    const A = inputs.A.value;

    return 0.05*A/100*10000;
  },
  AsNecessaireInf: (inputs) => {
    const AsCalcInf = calculationFunctions.AsCalcInf(inputs);
    const AsMinInf = calculationFunctions.AsMinInf(inputs);

    return Math.max(AsCalcInf,AsMinInf);
  },
  AsEfInf: (inputs) => {
    const DiamBarresInf = inputs.DiamBarresInf.value;
    const NbBarresCoucheInf = inputs.NbBarresCoucheInf.value;
    const NbCouchesInf = inputs.NbCouchesInf.value;

    return Math.PI*(DiamBarresInf/10)**2/4*NbBarresCoucheInf*NbCouchesInf;
  },
  sInf: (inputs) => {
    const A = inputs.A.value;
    const NbBarresCoucheInf = inputs.NbBarresCoucheInf.value;

    return A/NbBarresCoucheInf*100;
  },
  UrInf: (inputs) => {
    const AsNecessaireInf = calculationFunctions.AsNecessaireInf(inputs);
    const AsEfInf = calculationFunctions.AsEfInf(inputs);

    return AsEfInf/AsNecessaireInf*100;
  },

  // Calcul d'armature superieur de la semelle 
  
  AsMinSup: (inputs) => {
    const A = inputs.A.value;

    return 0.05*A/100*10000;
  },
  sSup: (inputs) => {
    const A = inputs.A.value;
    const NbBarresCoucheSup = inputs.NbBarresCoucheSup.value;

    return A/NbBarresCoucheSup*100;
  },
  AsEfSup: (inputs) => {
    const DiamBarresSup = inputs.DiamBarresSup.value;
    const NbBarresCoucheSup = inputs.NbBarresCoucheSup.value;
    const NbCouchesSup = inputs.NbCouchesSup.value;

    return Math.PI*(DiamBarresSup/10)**2/4*NbBarresCoucheSup*NbCouchesSup;
  },
  UrSup: (inputs) => {
    const AsEfSup = calculationFunctions.AsEfSup(inputs);
    const AsMinSup = calculationFunctions.AsMinSup(inputs);

    return AsEfSup/AsMinSup;
  },

  // Calcul d'armature du fut (le cas le plus défavorable est celui avec effort de traction)
  df: (inputs) => {
    const Hf = inputs.Hf.value;

    return 0.9*Hf;
  },
  FrCom: (inputs) => {
    const fck = inputs.fck.value;
    const Lf = inputs.Lf.value;

    return fck*1000*0.85/1.5*Lf**2;
  },
  AsTrac: (inputs) => {
    const Ft = inputs.Ft.value;
    const fyk = inputs.fyk.value;

    return Ft/(fyk/10/1.15);
  },
  AsMinFut: (inputs) => {
    const Lf = inputs.Lf.value;
    const fctm = inputs.fctm.value;
    const fyk = inputs.fyk.value;

    return (Lf**2*fctm/fyk)*10000;
  },
  AsNecessaireFut: (inputs) => {
    const AsTrac = calculationFunctions.AsTrac(inputs);
    const AsMinFut = calculationFunctions.AsMinFut(inputs);

    return Math.max(AsTrac,AsMinFut);
  },
  AsEfFut: (inputs) => {
    const DiamBarresFut = inputs.DiamBarresFut.value;
    const NbBarresFut = inputs.NbBarresFut.value;

    return Math.PI*(DiamBarresFut/10)**2/4*NbBarresFut;
  },
  UrFut: (inputs) => {
    const AsEfFut = calculationFunctions.AsEfFut(inputs);
    const AsNecessaireFut = calculationFunctions.AsNecessaireFut(inputs);

    return AsEfFut/AsNecessaireFut;
  },

  // Calcul d'armature transversale du fut

  AsMinTransFut: (inputs) => {
    const fck = inputs.fck.value;
    const fyk = inputs.fyk.value;
    const Hf = inputs.Hf.value;

    return 0.08*Math.sqrt(fck)/fyk*Hf*1000;
  },
  AsTransFut: (inputs) => {
    const DiamBarresTransFut = inputs.DiamBarresTransFut.value;


    return Math.PI*DiamBarresTransFut**2/4*2;
  },
  sTransFut: (inputs) => {
    const AsTransFut = calculationFunctions.AsTransFut(inputs);
    const AsMinTransFut = calculationFunctions.AsMinTransFut(inputs);

    return (AsTransFut/AsMinTransFut)/10;
  },
  NbBarresTransFut: (inputs) => {
    const Hf = inputs.Hf.value;
    const sTransFut = calculationFunctions.sTransFut(inputs);

    return Hf*100/sTransFut;
  }

}

export default calculationFunctions;