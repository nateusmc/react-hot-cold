import React from 'react';

import GuessForm from './guess-form';
import './guess-section.css';
import {connect} from 'react-redux';

export function GuessSection(props) {
    return (
        <section>
            <div className="form-body">
                <h2 id="feedback">{props.feedback}</h2>
                <GuessForm />
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);

