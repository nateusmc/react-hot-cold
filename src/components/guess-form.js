import React from 'react';
import store from '../store'
import {updateFeedback, submitGuesses} from '../actions'
import './guess-form.css';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        store.dispatch(submitGuesses(this.input.value))
        store.dispatch(updateFeedback())
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess"></label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder='Enter a Number' required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

