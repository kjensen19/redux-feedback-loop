import React from 'react';
import './App.css';
import Header from '../Header/Header';
import BasicTable from '../Admin/Admin';
import CardFrame from '../CardFrame/CardFrame';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react'
import { Paper, Box } from '@mui/material';
import Container from '@mui/material/Container';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import ButtonBar from '../ButtonBar/ButtonBar';
import BasicMenu from '../SpeedDial/SpeedDial';



function App() {
  const [colorMode, setColorMode] = useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: `${colorMode}`,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper id="bgAll"  className={colorMode} elevation={8}>
        <Router>
          <BasicMenu colorMode={colorMode} setColorMode={setColorMode}/>
          <Box className='App'
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          >
          <Route exact path="/">
            <Container       
              sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'
              }}>
              <Header />
            </Container>
          </Route>
          <Route exact path ="/feedback">
              <CardFrame />
          </Route>
          <Route exact path= "/admin">
              <BasicTable />
          </Route>
          </Box>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
