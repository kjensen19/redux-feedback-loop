import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import RatingScale from '../RatingScale/RatingScale';
import AccordDrawer from '../AccordDrawer/AccordDrawer';
import { useSelector } from 'react-redux';
import ReviewCard from '../ReviewCard/ReviewCard';


//TODO Add on click to collect rating (currentQuestion + rating to store object)





 function CardFrame() {
  const currentQuestion = useSelector(store => store.currentQuestion)
  const questions = useSelector(store => store.questionBank)
  console.log(questions)
  let card =<></>
  
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
        <AccordDrawer  />
      </React.Fragment>
    )
  }

  return (
      <Box className="feedbackCard"sx={{ width:.5, height: .5}}>
        <Paper elevation={24}>
          <Card variant="outlined">{card}</Card>
        </Paper>
      </Box>
  );
}

export default CardFrame
