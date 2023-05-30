import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import ChooseCat from './components/ChooseCat';
import { grey } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from './components/ProfilePage';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const colorTheme = createTheme({
    typography: {
      fontFamily: 'Cairo',
    },

    palette: {
      mode: darkMode? "dark": "light",
      background : {
        paper: darkMode? grey[900]: grey[300],
        default: darkMode? "#121212": grey[200],
       },
       divider : darkMode? 'rgba(255, 255, 255, 0.3)': 'rgba(0, 0, 0, 0.3)',
    },
  });

  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
        <Router>
          <Navbar check={darkMode} change={ ()=> setDarkMode(!darkMode) } />
          <Box mx={ {sm: 5, xs: 1} } my={2} >
            <Routes>
              <Route path="/" exact element={<ChooseCat />} />
              <Route path="/profile/:api/:id" exact element={<ProfilePage />} />
            </Routes>
          </Box>
        </Router>
    </ThemeProvider>
    )
}

export default App;
