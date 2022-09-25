import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Paper } from '@mui/material';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'



function ButtonBar( {colorMode, setColorMode} ) {

    const history = useHistory()
    const dispatch = useDispatch()

    function toggleColor() {
        colorMode === 'light' ? setColorMode('dark') : setColorMode('light')
    }

    function handleHome(){
        dispatch({type: 'CLEAR_DATA'})
        history.push('/')
    }

    function handleInfo(){

    }

    function handleAdmin() {
        history.push('/admin')
    }

    return(
        <Stack width={.04}>
                <Button onClick={toggleColor} variant="outlined"  color='inherit'>
                {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </Button>
                <Button variant='outlined' color="inherit" onClick={handleHome} title="Start Over"><HomeIcon /></Button>
                <Button variant='outlined' color="inherit" onClick={handleInfo}><QuestionMarkIcon /></Button>
                <Button variant='outlined' color="inherit" onClick={handleAdmin}><AdminPanelSettingsIcon /></Button>
        </Stack>
        
    )
}

export default ButtonBar