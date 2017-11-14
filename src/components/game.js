import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal'

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <GuessSection/>
                <GuessCount/>
                <GuessList/>
                <InfoModal/>
            </div>
        );
    }
}
