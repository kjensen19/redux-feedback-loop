import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextInput from '../TextInput/TextInput';


//Drawer for final comment/review (on last card) click to open
export default function AccordDrawer() {
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={< ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add Comment and Review Answers</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <TextInput />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
