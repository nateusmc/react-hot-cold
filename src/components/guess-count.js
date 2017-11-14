import React from 'react';

import './guess-count.css';
import {connect} from 'react-redux';
import store from '../store';

export function GuessCount(props) {
    return (
        <p>
            Guess #<span id="count" placeholder="0">{props.guesses.length}</span>!
        </p>
    );
}

const mapStateToProps = state => ({
    guesses: state.guesses
})

export default connect(mapStateToProps)(GuessCount);
