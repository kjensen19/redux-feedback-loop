import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function ReviewCard() {
    const dispatch = useDispatch()
    // const feeling = 


    //Need to build object from redux store that looks like:
    //("feeling", "understanding", "support", "comments")
    let feedbackSession = {
        feeling: useSelector(store => store.feelingAnswers),
        understanding: useSelector(store => store.understandingAnswers),
        support: useSelector(store => store.supportAnswers),
        comments: useSelector(store => store.commentsAnswers)
    }

    //POST route on click
    handleSubmit = (event) => {
        event.preventDefault(event)
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedbackSession
        }).then((response) => {
            console.log('POST complete')
            //need to call clear dispatch
            const action = {
                type: 'CLEAR_DATA'
            }
            dispatch(action)
        }).catch((error) => {
            console.log('CS POST ERROR', error)
        })

    }

    return(
        ''
    )
}

export default ReviewCard