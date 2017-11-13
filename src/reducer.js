import {NEW_GAME, SUBMIT_GUESSES, INFO_MODAL, UPDATE_FEEDBACK} from './actions';

export default (state, action) => {
	if (action.type === 'NEW_GAME') {
		return Object.assign({}, state, {
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.floor(Math.random() * 100) + 1,
			modalOpen: false
		});
	} else if (action.type === 'SUBMIT_GUESSES') {
		return Object.assign({}, state, {
			guesses: [...state.guesses, action.guess]
		});
	} else if (action.type === 'INFO_MODAL') {
		return Object.assign({}, state, {
			modalOpen: !state.modelOpen
		});
	} else if (action.type === 'UPDATE_FEEDBACK') {
		let currentGuess = state.guesses.slice(-1)[0];
		let answer = state.correctAnswer;
		let difference;
        
		difference = Math.abs(currentGuess - answer);
		console.log(`currentGuess: ${currentGuess}, answer: ${answer}, difference: ${difference}`);
        
		if (difference === 0) {
			return Object.assign({}, state, {feedback: 'You won!'});
		} else if (difference <= 5) {
			return Object.assign({}, state, {feedback: 'You\'re burning up!'});
		} else if (difference <= 10) {
			return Object.assign({}, state, {feedback: 'Hot'});
		} else if (difference <= 20) {
			return Object.assign({}, state, {feedback: 'Warm'});
		} else if (difference <= 50) {
			return Object.assign({}, state, {feedback: 'Cool'});
		} else if (difference > 50) {
			return Object.assign({}, state, {feedback: 'Cold'});
		}
	} return state; 
};
