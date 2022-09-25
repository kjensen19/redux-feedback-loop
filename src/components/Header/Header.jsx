import Button from '@mui/material/Button';
import { createTheme} from '@mui/material/styles';
import { Stack } from '@mui/system';
import { Paper } from '@mui/material'
import { useHistory } from 'react-router-dom'


function Header({setColorMode, colorMode}) {
    const history = useHistory()
    function startSurvey() {
      history.push('/feedback')
    }

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