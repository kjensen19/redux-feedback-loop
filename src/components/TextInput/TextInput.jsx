import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import ReviewCard from '../ReviewCard/ReviewCard';
import Stack from '@mui/material/Stack';

function TextInput() {
  //Comment text handlers
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
    setValue('')
    dispatch(action)

    


  }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: 'auto' },
        }}
        noValidate
        autoComplete="off"
    >
      <Stack >
        <TextField
          id="outlined-textarea"
          label="Comment"
          placeholder="Comment"
          multiline
          name={value}
          value={value}
          onChange={handleChange}
          color="secondary"
        />
        <Button onClick={handleSubmit} size="medium" variant="outlined" color="inherit">Add Comment</Button>
        <ReviewCard />
      </Stack>
    </Box>
  )
    }

    export default TextInput