import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import ReviewCard from '../ReviewCard/ReviewCard';

 function TextInput() {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('value in text submit', value)
    const action = {
      type: 'ADD_4',
      payload: {value}
    }
    dispatch(action)
    setValue('')


  }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
          id="outlined-textarea"
          label="Comment"
          placeholder="Comment"
          multiline
          fullWidth
          name={value}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="outlined" color="inherit">Submit</Button>
        <ReviewCard />
    </Box>
  )
    }

    export default TextInput