import React from 'react';
import { AppBar, Toolbar, Typography, Switch, IconButton } from '@mui/material';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useNavigate } from 'react-router-dom'

export default function Navbar({check, change}) {
  const k = (652).toLocaleString("ar-EG");
  const navigate = useNavigate();

  return (
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="refresh"
            sx={{ ml: {sm: 1, xs: 0} }}
            onClick={() => {navigate('/')}}
          >
            <AutoModeIcon />
          </IconButton>

          <Typography fontSize={{xs: 20, sm: 25}} component="div" sx={{ flexGrow: 1 }} className='title'>
            الكتيبة {k} حرب إلكترونية
          </Typography>

          <Switch
          inputProps= {{ 'aria-label': 'Switch Color Mode' }}
          onChange={change}
          checked={check}
          />

        </Toolbar>
      </AppBar>
  );
}