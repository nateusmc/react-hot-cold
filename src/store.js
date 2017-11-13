import {createStore} from 'redux'
import {reducer} from './reducer'

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  modalOpen: false
}

let store = createStore(reducer, initialState);