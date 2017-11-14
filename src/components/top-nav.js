import React from 'react';

import './top-nav.css';
import {connect} from 'react-redux';
import store from '../store';
import {newGame, infoModal} from '../actions';

const onInfoClick = event => {
    event.preventDefault;
    store.dispatch(infoModal());
    console.log(store.getState());
}

export class TopNav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => onInfoClick(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => store.dispatch(newGame())}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    modalOpen: state.modalOpen
})

export default connect(mapStateToProps)(TopNav);

