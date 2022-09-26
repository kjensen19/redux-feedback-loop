import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';

//Labels for rating values
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

  //State for rating scale
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const history = useHistory()
  const dispatch = useDispatch()
  //Handle back button click
  const handleBack = () => {
    if (currentQuestion === 1){
      dispatch({type: 'CLEAR_ALL'})
      history.push('/')
    } 
    else{
      dispatch({type:'PREVIOUS_PAGE'})
    }
  }

  //Submit value to store
  const handleSubmit = () => {
    console.log('Go next')
    console.log(`value=${value}`)
    if (value > 0){
      const action ={
        type: `ADD_${currentQuestion}`,
        payload: {value}
      }
      setValue(0)
      setHover(-1)
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
      <Stack >
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
      </Stack>
        </Box>

        <Box sx={{ mt: 4}}>
           <Button className="backButton" size="small" variant='outlined' onClick={handleBack} color="inherit" >Go Back</Button>
           <Button size="small" variant='outlined' onClick={handleSubmit} color="inherit">Next Question</Button>
        </Box>
      
  </>
  );
}

export default RatingScale