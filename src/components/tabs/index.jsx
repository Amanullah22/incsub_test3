import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FTab from "../../images/FTab.png";
import STab from "../../images/STab.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
        style={{padding: '0px 300px', background: '#414f6b'}}>
          <Tab style={{textDecoration: 'underline', background: '#b0b4be', color: '#414f6b', fontWeight: 'bolder'}} label="Mountain 1" {...a11yProps(0)} />
          <Tab style={{fontWeight: 'bolder', color: '#fff'}} label="Mountain 2" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel style={{padding: 0}} value={value} index={0}>
        <div style={{backgroundImage: `url(${FTab})`, height: '545px'}}>
            <img src='./schedule1.png' style={{margin: '100px'}} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{backgroundImage: `url(${STab})`, height: '545px'}}>
            <img src='./schedule2.png' style={{margin: '100px'}} />
        </div>
      </TabPanel>
    </Box>
  );
}