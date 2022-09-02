import React, { useState } from 'react';
import update from 'immutability-helper';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography
} from '@material-ui/core';

import GrainSharp from '@material-ui/icons/GrainSharp';
import AcUnitSharp from '@material-ui/icons/AcUnitSharp';
import GridOn from '@material-ui/icons/GridOn';
import ScreenRotationOutlined from '@material-ui/icons/ScreenRotationOutlined';
import Receipt from '@material-ui/icons/Receipt';
import Geometry from './Geometry';
import Loads from './Loads';
import Reinforcement from './Reinforcement';
import Stability from './Stability';
import ReinforcementOutputs from './ReinforcementOutputs';

import TowerFoundation from './TowerFoundation.png';


import initialData from './initialData';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    borderTop: 70,
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: 'auto',
  },
}));

function MyApp(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  // Define result state object
  const [appData, setAppData] = useState(initialData);

  const updateValue = (field, name, value) => {
    const updateAppData = update(appData, {
      [field]: {
        [name]: {
          value: {
            $set: value
          }
        }
      }
    });
    setAppData(updateAppData);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
       >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Geometry 
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Loads 
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Reinforcement 
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Stability
            outputsData={appData.outputs}
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <ReinforcementOutputs
            outputsData={appData.outputs}
            inputsData={appData.inputs}
            updateValue={updateValue}
          />
        </TabPanel>
      </SwipeableViews>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          showLabels
         >
          <BottomNavigationAction label="Geometry"  {...a11yProps(0)} icon={<GridOn />} />
          <BottomNavigationAction label="Loads"  {...a11yProps(1)} icon={<AcUnitSharp />} />
          <BottomNavigationAction label="Reinforcement"  {...a11yProps(2)} icon={<GrainSharp />} />
          <BottomNavigationAction label="Stability" {...a11yProps(3)} icon={<ScreenRotationOutlined />} />
          <BottomNavigationAction label="ReinforcementOutputs" {...a11yProps(4)} icon={<Receipt />} />
        </BottomNavigation>
      </AppBar>
    </div>
  );
}

MyApp.propTypes = {
    props: PropTypes.object
};

export default MyApp;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}