import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import MissingAlert from '../MissingAlert/MissingAlert';
import { useHistory } from 'react-router-dom';

const labels = {
  0.5: 'Awful',
  1: 'Awful+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function RatingScale({ currentQuestion }) {


  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const history = useHistory()
  const dispatch = useDispatch()

  //button logic: first question- both, 2nd- both, 3rd-both, 4th-just back

  const handleBack = () => {
    console.log('Go back where???')
    if (currentQuestion === 1){
      dispatch({type: 'CLEAR_ALL'})
      history.push('/')
    } 
    else{
      dispatch({type:'PREVIOUS_PAGE'})
    }
  }


  const handleSubmit = () => {
    console.log('Go next')
    console.log(`value=${value}`)
    if (value > 0){
      const action ={
        type: `ADD_${currentQuestion}`,
        payload: {value}
      }
      setValue(0)
      dispatch(action)
    }
    else {
        alert('Please select a value')
    }
  }


  return (
    <>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        size="large"
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit"/>}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      </Box>
        <Box sx={{ mt: 4}}>
           <Button className="backButton" size="small" variant='outlined' onClick={handleBack} color="inherit" >Go Back</Button>
           <Button size="small" variant='outlined' onClick={handleSubmit} color="inherit">Next Question</Button>
        </Box>
      
  </>
  );
}

export default RatingScale