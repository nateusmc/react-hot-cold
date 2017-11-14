import {createStore} from 'redux';
import reducer from './reducer';
import {newGame, submitGuesses, toggleModal, updateFeedback} from './actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.floor(Math.random() * 100) + 1,
	modalOpen: false
};
let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;