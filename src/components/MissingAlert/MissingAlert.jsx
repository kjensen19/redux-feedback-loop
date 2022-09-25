import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function MissingAlert() {
  return (
      <Alert variant="filled" severity="warning">
        Please select a rating between .5 and 5
      </Alert>
  );
}
