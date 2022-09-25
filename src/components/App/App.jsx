import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import CommentCard from '../CommentsCard/CommentCard';
import FeelingCard from '../FeelingCard/FeelingCard';
import ReviewCard from '../ReviewCard/ReviewCard';
import SupportCard from '../SupportCard/SupportCard';
import UnderstandingCard from '../UnderstandingCard/UnderstandingCard';
import RatingScale from '../RatingScale/RatingScale';
import TextInput from '../TextInput/TextInput';
import CardFrame from '../CardFrame/CardFrame';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react'
import { Paper, Box } from '@mui/material';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function App() {
  const [colorMode, setColorMode] = useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: `${colorMode}`,
    },
  });
  function handleClick() {
    colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={8}>
        <Router>
          <Button onClick={handleClick} variant="outlined"  color='inherit'>
            {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
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
          <Route exact path ="/understanding">
            <CardFrame />
          </Route>
          <Route exact path ="/support">
            <CardFrame />
          </Route>
          <Route exact path ="/comments">
            <CardFrame />
            <ReviewCard />
          </Route>
          </Box>
        </Router>
      
      </Paper>
    </ThemeProvider>
  );
}

export default App;
