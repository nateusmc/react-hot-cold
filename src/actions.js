/*
Actions Needed:
* New Game
* Submit Guesses
* Info Modal Button
* Feedback
*/

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
});

export const SUBMIT_GUESSES = 'SUBMIT_GUESSES';
export const submitGuesses = guess => ({
	type: SUBMIT_GUESSES,
	guess
});

export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = () => ({
	type: TOGGLE_MODAL
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = () => ({
	type: UPDATE_FEEDBACK
});
