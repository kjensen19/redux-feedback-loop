import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Import REDUX 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



//reducers here
const questionBank = (state = [{0 : 'Home'}, {1 : 'How are you feeling today?'}, {2 : 'How well are you understanding the content?'}, {3: "How well are you being supported?"}, {4: 'Any comments you want to leave?'}], action) => {
    return state
}
const currentQuestion = (state = 1, action) => {
    switch(action.type) {
        case 'ADD_1':
        case 'ADD_2':
        case 'ADD_3':
            return state + 1
        case 'PREVIOUS_PAGE':
            return state - 1
        case 'CLEAR_DATA':
            return 1
    }
    return state
}

const feelingAnswers = (state = [], action) => {
    switch(action.type){
        case 'ADD_1':
            return action.payload
        case 'CLEAR_DATA':
            return []
    }
    return state
}

const understandingAnswers = (state = [], action) => {
    switch(action.type){
        case 'ADD_2':
            return action.payload
        case 'CLEAR_DATA':
            return []
    }
    return state
}

const supportAnswers = (state = [], action) => {
    switch(action.type){
        case 'ADD_3':
            return action.payload
        case 'CLEAR_DATA':
            return []
    }
    return state
}

const commentsAnswers = (state = [], action) => {
    switch(action.type){
        case 'ADD_4':
            return action.payload
        case 'CLEAR_DATA':
            return []
    }
    return state
}

//Create Store

const storeInstance = createStore(
    combineReducers(
        {
            //reducers here
            feelingAnswers,
            understandingAnswers,
            supportAnswers,
            commentsAnswers,
            questionBank,
            currentQuestion
            
        }
    ),
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
    registerServiceWorker();
