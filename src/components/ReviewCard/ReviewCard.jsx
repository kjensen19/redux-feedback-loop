import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function ReviewCard() {
  const history = useHistory()
  const dispatch = useDispatch()
  // const feeling = 
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = useState(false);


  const handleClickOpen = () => {
      console.log(feedbackSession)
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      const action = {
        type: 'CLEAR_DATA'
    }
      dispatch(action)
      history.push('/')
      //setOpenAlert(false);
      return;
    }
      
      // setOpenAlert(false);
      const action = {
        type: 'CLEAR_DATA'
    }
      dispatch(action)
      history.push('/')
    };

    //Need to build object from redux store that looks like:
    //("feeling", "understanding", "support", "comments")
    let feedbackSession = {
        feeling: useSelector(store => store.feelingAnswers.value),
        understanding: useSelector(store => store.understandingAnswers.value),
        support: useSelector(store => store.supportAnswers.value),
        comments: useSelector(store => store.commentsAnswers.value)
    }

    //POST route on click
    const handleSubmit = () => {
        event.preventDefault(event)
        setOpenAlert(true);
        console.log('openAlert = ', openAlert)
        handleClose()
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackSession
        }).then((response) => {
            
            console.log('openAlert=', openAlert)
            console.log('POST complete')
            
            //need to call clear dispatch
            // const action = {
            //     type: 'CLEAR_DATA'
            // }
            // dispatch(action)
            setOpenAlert(true)
        }).catch((error) => {
            console.log('CS POST ERROR', error)
        })

    }

    

    return(
        <div>
          <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
              Upload Success! 
            </Alert>
          </Snackbar>
        <Button variant="outlined" color="inherit" size='large' onClick={handleClickOpen} fullWidth>
            
            Review Answers
        </Button>
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Here's the feedback you provided:
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    1. How are you feeling today?
                    You selected {feedbackSession.feeling}
                </Typography>
                <Typography gutterBottom>
                    2. How well are you understanding the content?
                    You selected {feedbackSession.understanding}
                </Typography>
                <Typography gutterBottom>
                    3. How well are you being supported?
                    You selected {feedbackSession.support}
                </Typography>
                <Typography gutterBottom>
                    4. Any comments you want to leave?
                    You wrote: {feedbackSession.comments}
                </Typography>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleSubmit}>
                Submit Form
            </Button>
            </DialogActions>
        </BootstrapDialog>
        </div>
    )
}

export default ReviewCard