import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Typography, Tab } from '@mui/material';
import ضباط from "./ضباط";
import ضباط_صف from "./ضباط_صف";
import جنود from "./جنود";

const ChooseCat = () => {
    const [value, setValue] = useState('one');
    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

  return (
    <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="إختر فئة البحث" variant="fullWidth">
                <Tab
                    value="one"
                    label={<Typography fontSize={{xs: 15, sm: 20}} component="div">ضباط</Typography>}
                />
                <Tab
                    value="two"
                    label={<Typography fontSize={{xs: 15, sm: 20}} component="div">ضباط صف</Typography>}
                />
                <Tab
                    value="three"
                    label={<Typography fontSize={{xs: 15, sm: 20}} component="div">جنود</Typography>}
                />
            </TabList>
        </Box>

        <TabPanel value="one"><ضباط /></TabPanel>
        <TabPanel value="two"><ضباط_صف /></TabPanel>
        <TabPanel value="three"><جنود /></TabPanel>
  </TabContext>
  )
}

export default ChooseCat;