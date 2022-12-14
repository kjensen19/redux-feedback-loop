import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { Paper } from '@mui/material'
import { useHistory } from 'react-router-dom'


function Header() {
    const history = useHistory()
    //Start button
    function startSurvey() {
      history.push('/feedback')
    }
    //Landing page
    return(
        <Paper elevation={12} >
            <header className='App-header'>
                <Stack alignitems={'center'}>
                    <h1 id='App-title'>Feedback!</h1>
                    <h4>Don't forget it!</h4>
                    <Button onClick={startSurvey} variant="outlined"  color='inherit'>Start Feedback</Button>
                </Stack>
            </header>
        </Paper>
    )
}

export default Header