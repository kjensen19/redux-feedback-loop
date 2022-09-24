import React from 'react';
import axios from 'axios';
import './App.css';
import ToggleColorMode from '../ToggleColorMode/ToggleColorMode';
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
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import Container from '@mui/material/Container';



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
        <Container className='App'>
          <Button onClick={handleClick} variant="contained">Color Mode</Button>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <CardFrame />
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
