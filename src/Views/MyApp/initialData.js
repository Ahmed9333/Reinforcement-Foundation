const initialData = {
  inputs: {
    Nels: {
      name: 'Nels',
      text: 'Nels',
      value: 37.3,
      description: 'Effort normal ELS CARAC',
      unit: 'kN'
    },
    VXels: {
      name: 'VXels',
      text: 'VXels',
      value: 32.3,
      description: 'Effort tranchant suivant X ELS CARAC',
      unit: 'kN'
    },
    VYels: {
      name: 'VYels',
      text: 'VYels',
      value: 0,
      description: 'Effort tranchant suivant Y ELS CARAC',
      unit: 'kN'
    },
    MXels: {
      name: 'MXels',
      text: 'MXels',
      value: 0,
      description: 'Moment autour de X ELS CARAC',
      unit: 'kN.m'
    },
    MYels: {
      name: 'MYels',
      text: 'MYels',
      value: 595,
      description: 'Moment autour de Y ELS CARAC',
      unit: 'kN.m'
    },
    Nelu: {
      name: 'Nelu',
      text: 'Nelu',
      value: 45,
      description: 'Effort normal ELU GEO',
      unit: 'kN'
    },
    VXelu: {
      name: 'VXelu',
      text: 'VXelu',
      value: 52,
      description: 'Effort tranchant suivant X ELU GEO',
      unit: 'kN'
    },
    VYelu: {
      name: 'VYelu',
      text: 'VYelu',
      value: 0,
      description: 'Effort tranchant suivant Y ELU GEO',
      unit: 'kN'
    },
    MXelu: {
      name: 'MXelu',
      text: 'MXelu',
      value: 0,
      description: 'Moment autour de X ELU GEO',
      unit: 'kN.m'
    },
    MYelu: {
      name: 'MYelu',
      text: 'MYelu',
      value: 950,
      description: 'Moment autour de Y ELU GEO',
      unit: 'kN.m'
    },
    A: {
      name: 'A',
      text: 'A',
      value: 4.7,
      description: 'Longueur du Massif',
      unit: 'm'
    },
    B: {
      name: 'B',
      text: 'B',
      value: 4.7,
      description: 'Largeur du Massif',
      unit: 'm'
    },
    H: {
      name: 'H',
      text: 'H',
      value: 0.7,
      description: 'Hauteur de béton',
      unit: 'm'
    },
    Lf: {
      name: 'Lf',
      text: 'Lf',
      value: 0.8,
      description: 'Largeur des plots béton',
      unit: 'm'
    },
    Hf: {
      name: 'Hf',
      text: 'Hf',
      value: 1.5,
      description: 'Hauteur des plots béton dans le sol',
      unit: 'm'
    },
    Hms: {
      name: 'Hms',
      text: 'Hms',
      value: 0.1,
      description: 'Hauteur des plots béton hors sol',
      unit: 'm'
    },
    roBeton: {
      name: 'roBeton',
      text: 'roBeton',
      value: 2450,
      description: 'Masse volumique du béton',
      unit: 'kg/m3'
    },
    roRemblai: {
      name: 'roRemblai',
      text: 'roRemblai',
      value: 1427.115189,
      description: 'Masse volumique du remblai',
      unit: 'kg/m3'
    },
    sigmaels: {
      name: 'sigmaels',
      text: 'sigmaels',
      value: 384,
      description: 'Contrainte admissible du sol à ELS',
      unit: 'kPa'
    },
    sigmaelu: {
      name: 'sigmaelu',
      text: 'sigmaelu',
      value: 559,
      description: 'Contrainte admissible du sol à ELU',
      unit: 'kPa'
    },
    a2: {
      name: 'a2',
      text: 'a2',
      value: 2.5,
      description: 'Largeur a la base du pylone',
      unit: 'm'
    },
    fck: {
      name: 'fck',
      text: 'fck',
      value: 25,
      description: 'Résistance caractéristique en compression du béton à 28 jours',
      unit: 'MPa'
    },
    fctm: {
      name: 'fctm',
      text: 'fctm',
      value: 2.55,
      description: 'Valeur moyenne de la résistance en traction directe du béton',
      unit: 'MPa'
    },
    fyk: {
      name: 'fyk',
      text: 'fyk',
      value: 500,
      description: 'Limite caractéristique élasticité de l"acier de béton armé',
      unit: 'MPa'
    },
    Klim: {
      name: 'Klim',
      text: 'Klim',
      value: 0.21,
      description: 'Moment réduit limite ultime ELU',
      unit: 'kN.m'
    },
    NbCouchesInf: {
      name: 'NbCouchesInf',
      text: 'NbCouchesInf',
      value: 1.00,
      description: 'Nombre de couches inférieures',
      unit: ' '
    },
    DiamBarresInf: {
      name: 'DiamBarresInf',
      text: 'DiamBarresInf',
      value: 10.00,
      description: 'Diamètre des barres inférieures',
      unit: 'mm'
    },
    NbBarresCoucheInf: {
      name: 'NbBarresCoucheInf',
      text: 'NbBarresCoucheInf',
      value: 30.00,
      description: 'Nombre de barres par couche inférieure',
      unit: ' '
    },
    NbCouchesSup: {
      name: 'NbCouchesSup',
      text: 'NbCouchesSup',
      value: 1.00,
      description: 'Nombre de couches supérieures',
      unit: ' '
    },
    DiamBarresSup: {
      name: 'DiamBarresSup',
      text: 'DiamBarresSup',
      value: 10.00,
      description: 'Diamètre des barres supérieures',
      unit: 'mm'
    },
    NbBarresCoucheSup: {
      name: 'NbBarresCoucheSup',
      text: 'NbBarresCoucheSup',
      value: 30.00,
      description: 'Nombre de barres par couche supérieure',
      unit: ' '
    },
    Fc: {
      name: 'Fc',
      text: 'Fc',
      value: 392.00,
      description: 'Effort de compression maximale',
      unit: 'kN'
    },
    Ft: {
      name: 'Ft',
      text: 'Ft',
      value: 422.00,
      description: 'Effort de traction maximale',
      unit: 'kN'
    },
    DiamBarresFut: {
      name: 'DiamBarresFut',
      text: 'DiamBarresFut',
      value: 20.00,
      description: 'Diamètre des barres du fût',
      unit: 'mm'
    },
    NbBarresFut: {
      name: 'NbBarresFut',
      text: 'NbBarresFut',
      value: 20.00,
      description: 'Nombre de barres du fût',
      unit: ' '
    },
    DiamBarresTransFut: {
      name: 'NbBarresFut',
      text: 'NbBarresFut',
      value: 8.00,
      description: 'Diamètre des barres transversale du fût',
      unit: 'mm'
    }
  },
  outputs: {
    Nmassif: {
      name: 'Nmassif',
      text: 'Nmassif',
      value: 412.8,
      description: 'Effort normal du au poids du massif',
      unit: 'kN'
    },
    NSemelle: {
      name: 'NSemelle',
      text: 'NSemelle',
      value: 371.7,
      description: ' ',
      unit: 'kN'
    },
    NPlot: {
      name: 'NPlot',
      text: 'NPlot',
      value: 24.6,
      description: ' ',
      unit: 'kN'
    },
    NSol: {
      name: 'NSol',
      text: 'NSol',
      value: 449.6,
      description: ' ',
      unit: 'kN'
    },
    NFondation: {
      name: 'NFondation',
      text: 'NFondation',
      value: 846.0,
      description: ' ',
      unit: 'kN'
    },
    CrEls: {
      name: 'CrEls',
      text: 'CrEls',
      value: 883.3,
      description: ' ',
      unit: 'kN'
    },
    TEls: {
      name: 'TEls',
      text: 'TEls',
      value: 32.30,
      description: ' ',
      unit: 'kN'
    },
    MEls: {
      name: 'MEls',
      text: 'MEls',
      value: 595.00,
      description: 'Moment à la base du pylone à ELS',
      unit: 'kN.m'
    },
    MrEls: {
      name: 'MrEls',
      text: 'MrEls',
      value: 669.29,
      description: 'Moment à la base du pylone à ELS',
      unit: 'kN.m'
    },
    eEls: {
      name: 'eEls',
      text: 'eEls',
      value: 0.76,
      description: 'Excentricité à ELS',
      unit: 'm'
    },
    Bon6Els: {
      name: 'Bon6Els',
      text: 'Bon6Els',
      value: 0.76,
      description: 'Rapport B / 6',
      unit: 'm'
    },
    etatSemelleEls: {
      name: 'etatSemelleEls',
      text: 'etatSemelleEls',
      value: 'Semelle entièrement comprimée',
      description: 'Etat de la semelle à ELS',
      unit: ' '
    },
    LcEls: {
      name: 'LcEls',
      text: 'LcEls',
      value: 4.7,
      description: 'Longueur comprimée à ELS',
      unit: 'm'
    },
    ratioCompressionSolEls: {
      name: 'ratioCompressionSolEls',
      text: 'ratioCompressionSolEls',
      value: 100,
      description: 'Ratio compression du massif à ELS',
      unit: '%'
    },
    sigmaMaxEls: {
      name: 'sigmaMaxEls',
      text: 'sigmaMaxEls',
      value: 100,
      description: 'Contrainte Max à ELS',
      unit: 'kPa'
    },
    CrElu: {
      name: 'CrElu',
      text: 'CrElu',
      value: 1187.077374,
      description: ' ',
      unit: 'kN'
    },
    TElu: {
      name: 'TElu',
      text: 'TElu',
      value: 52.00,
      description: ' ',
      unit: 'kN'
    },
    MElu: {
      name: 'MElu',
      text: 'MElu',
      value: 950.00,
      description: 'Moment à la base du pylone à ELU',
      unit: 'kN.m'
    },
    MrElu: {
      name: 'MrElu',
      text: 'MrElu',
      value: 1069.60,
      description: 'Moment à la base du pylone à ELU',
      unit: 'kN.m'
    },
    eElu: {
      name: 'eElu',
      text: 'eElu',
      value: 0.90,
      description: 'Excentricité à ELU',
      unit: 'm'
    },
    Bon6Elu: {
      name: 'Bon6Elu',
      text: 'Bon6Elu',
      value: 0.78,
      description: 'Rapport B / 6',
      unit: 'm'
    },
    etatSemelleElu: {
      name: 'etatSemelleElu',
      text: 'etatSemelleElu',
      value: 'Semelle partiellement comprimée',
      description: 'Etat de la semelle à ELS',
      unit: ' '
    },
    LcElu: {
      name: 'LcElu',
      text: 'LcElu',
      value: 4.35,
      description: 'Longueur comprimée à ELU',
      unit: 'm'
    },
    ratioCompressionSolElu: {
      name: 'ratioCompressionSolElu',
      text: 'ratioCompressionSolElu',
      value: 92.49,
      description: 'Ratio compression du massif à ELU',
      unit: '%'
    },
    sigmaMaxElu: {
      name: 'sigmaMaxElu',
      text: 'sigmaMaxElu',
      value: 116.21,
      description: 'Contrainte Max à ELU',
      unit: 'kPa'
    },
    a1Ona3: {
      name: 'a1Ona3',
      text: 'a1Ona3',
      value: 1.10,
      description: 'Largeur a1 / a3',
      unit: 'm'
    },
    Xs: {
      name: 'Xs',
      text: 'Xs',
      value: 0.70,
      description: 'Position de la section de calcul - Xs',
      unit: ' '
    },
    SigmaSEls: {
      name: 'SigmaSEls',
      text: 'SigmaSEls',
      value: 68.06,
      description: 'Contrainte sous la semelle dans le section de calcul à ELS',
      unit: 'kPa'
    },
    SigmaMoyEls: {
      name: 'SigmaMoyEls',
      text: 'SigmaMoyEls',
      value: 74.02,
      description: 'Contrainte moyenne sous la semelle à ELS',
      unit: 'kPa'
    },
    QEls: {
      name: 'QEls',
      text: 'QEls',
      value: 243.51,
      description: 'Résultante des pressions à droite de la section de calcul à ELS',
      unit: 'kN'
    },
    XqEls: {
      name: 'XqEls',
      text: 'XqEls',
      value: 0.35,
      description: 'Position de la résultante des pression à droite de la section de calcul à ELS',
      unit: 'm'
    },
    MsEls: {
      name: 'MsEls',
      text: 'MsEls',
      value: 85.23,
      description: 'Moment dans la section de calcul à ELS',
      unit: 'kN.m'
    },
    SigmaSElu: {
      name: 'SigmaSElu',
      text: 'SigmaSElu',
      value: 97.49,
      description: 'Contrainte sous la semelle dans le section de calcul à ELU',
      unit: 'kPa'
    },
    SigmaMoyElu: {
      name: 'SigmaMoyElu',
      text: 'SigmaMoyElu',
      value: 106.85,
      description: 'Contrainte moyenne sous la semelle à ELU',
      unit: 'kPa'
    },
    QElu: {
      name: 'QElu',
      text: 'QElu',
      value: 351.54,
      description: 'Résultante des pressions à droite de la section de calcul à ELU',
      unit: 'kN'
    },
    XqElu: {
      name: 'XqElu',
      text: 'XqElu',
      value: 0.35,
      description: 'Position de la résultante des pression à droite de la section de calcul à ELU',
      unit: 'm'
    },
    MsElu: {
      name: 'MsElu',
      text: 'MsElu',
      value: 123.04,
      description: 'Moment dans la section de calcul à ELU',
      unit: 'kN.m'
    },
    Mmax: {
      name: 'Mmax',
      text: 'Mmax',
      value: 123.04,
      description: 'Moment dimensionnant',
      unit: 'kN.m'
    },
    ds: {
      name: 'ds',
      text: 'ds',
      value: 0.63,
      description: 'Hauteur utile de la semelle',
      unit: 'm'
    },
    k: {
      name: 'k',
      text: 'k',
      value: 0.005,
      description: 'Moment réduit ultime ELU',
      unit: 'kN.m'
    },
    z: {
      name: 'z',
      text: 'z',
      value: 0.63,
      description: 'Bras de levier',
      unit: 'm'
    },
    AsCalcInf: {
      name: 'AsCalcInf',
      text: 'AsCalcInf',
      value: 4.51,
      description: 'Bras de levier',
      unit: 'cm²'
    },
    AsMinInf: {
      name: 'AsMinInf',
      text: 'AsMinInf',
      value: 4.51,
      description: 'Section d"acier minimale inférieure',
      unit: 'cm²'
    },
    AsNecessaireInf: {
      name: 'AsNecessaireInf',
      text: 'AsNecessaireInf',
      value: 23.5,
      description: 'Section d"acier inférieure nécessaire',
      unit: 'cm²'
    },
    AsEfInf: {
      name: 'AsEfInf',
      text: 'AsEfInf',
      value: 23.56,
      description: ' ',
      unit: 'cm²'
    },
    sInf: {
      name: 'sInf',
      text: 'sInf',
      value: 15.00,
      description: 'Espacement des barres inférieures',
      unit: 'cm'
    },
    UrInf: {
      name: 'UrInf',
      text: 'UrInf',
      value: 1,
      description: ' ',
      unit: '%'
    },
    AsMinSup: {
      name: 'AsMinSup',
      text: 'AsMinSup',
      value: 23.50,
      description: 'Section d"acier minimale supérieure',
      unit: 'cm²'
    },
    sSup: {
      name: 'sSup',
      text: 'sSup',
      value: 15.00,
      description: 'Espacement des barres supérieures',
      unit: 'cm'
    },
    AsEfSup: {
      name: 'AsEfSup',
      text: 'AsEfSup',
      value: 23.56,
      description: 'Espacement des barres supérieures',
      unit: 'cm²'
    },
    UrSup: {
      name: 'UrSup',
      text: 'UrSup',
      value: 1,
      description: ' ',
      unit: '%'
    },
    df: {
      name: 'df',
      text: 'df',
      value: 1.35,
      description: 'Hauter effectife',
      unit: 'm'
    },
    FrCom: {
      name: 'FrCom',
      text: 'FrCom',
      value: 9066.67,
      description: 'Effort resistant en compression',
      unit: 'kN'
    },
    AsTrac: {
      name: 'AsTrac',
      text: 'AsTrac',
      value: 9.71,
      description: 'Section d"acier en traction',
      unit: 'cm²'
    },
    AsMinFut: {
      name: 'AsMinFut',
      text: 'AsMinFut',
      value: 32.77,
      description: 'Section d"acier minimale pour les fûts',
      unit: 'cm²'
    },
    AsNecessaireFut: {
      name: 'AsNecessaireFut',
      text: 'AsNecessaireFut',
      value: 32.77,
      description: 'Sectin d"acier necessaire pour les fûts',
      unit: 'cm²'
    },
    AsEfFut: {
      name: 'AsEfFut',
      text: 'AsEfFut',
      value: 37.70,
      description: 'Sectin d"acier necessaire pour les fûts',
      unit: 'cm²'
    },
    UrFut: {
      name: 'UrFut',
      text: 'UrFut',
      value: 1.15,
      description: 'Sectin d"acier necessaire pour les fûts',
      unit: '%'
    },
    AsMinTransFut: {
      name: 'AsMinTransFut',
      text: 'AsMinTransFut',
      value: 1.2,
      description: 'Section d"acier minimale transversale des fûts',
      unit: 'mm²'
    },
    AsTransFut: {
      name: 'AsTransFut',
      text: 'AsTransFut',
      value: 100.53,
      description: 'Section d"acier transversale des fûts',
      unit: 'mm²'
    },
    sTransFut: {
      name: 'sTransFut',
      text: 'sTransFut',
      value: 8.00,
      description: 'Espacement des barres transversales',
      unit: 'cm'
    },
    NbBarresTransFut: {
      name: 'NbBarresTransFut',
      text: 'NbBarresTransFut',
      value: 19.00,
      description: 'Nombre de barres transversale',
      unit: 'Barres'
    }
  }  
}

export default initialData;
