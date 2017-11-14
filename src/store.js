import {createStore} from 'redux';
import reducer from './reducer';
import {newGame, submitGuesses, infoModal, updateFeedback} from './actions';

const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.floor(Math.random() * 100) + 1,
	modalOpen: false
};
let store = createStore(reducer, initialState);
export default store;

store.dispatch(submitGuesses(32));
store.dispatch(submitGuesses(81));
store.dispatch(submitGuesses(99));
// console.log(store.getState());
// store.dispatch(infoModal());
// console.log(store.getState());
// store.dispatch(updateFeedback(32));
// console.log(store.getState());
// store.dispatch(newGame());
// console.log(store.getState());
