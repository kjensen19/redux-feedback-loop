import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 function TextInput() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
        />
    </Box>
  )
    }

    export default TextInput