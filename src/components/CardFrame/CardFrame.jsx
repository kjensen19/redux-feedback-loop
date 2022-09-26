import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import RatingScale from '../RatingScale/RatingScale';
import AccordDrawer from '../AccordDrawer/AccordDrawer';
import { useSelector } from 'react-redux';

function CardFrame() {
  //access question info
  const currentQuestion = useSelector(store => store.currentQuestion)
  const questions = useSelector(store => store.questionBank)

  //Set card based on point in survey (questions)
  let card = <></>
  
  if (currentQuestion < 4){
    card = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Question {currentQuestion} of 4
          </Typography>
          <Typography variant="h5" component="div">
            {questions[currentQuestion][currentQuestion]}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" >
            Useless - Excellent+
          </Typography>
            <RatingScale currentQuestion={currentQuestion} />
        </CardContent>
        <CardActions>
        </CardActions>
      </React.Fragment>
    );
  }
  //comment question (no rating)
  else {
    card = (
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Question {currentQuestion} of 4
          </Typography>
          <Typography variant="h5" component="div">
            {questions[currentQuestion][currentQuestion]}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
        <AccordDrawer />
      </React.Fragment>
    )
  }

  return (
      <Box className="feedbackCard"sx={{ width:.45, height: .7}}>
        <Paper elevation={24}>
          <Card variant="outlined">{card}</Card>
        </Paper>
      </Box>
  );
}

export default CardFrame
