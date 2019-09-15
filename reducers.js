import { combineReducers } from 'redux'

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from './actions'

const { SHOW_ALL } = VISIBILITY_FILTERS

// Reducer for handling updates to visibility filter state.
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// Reducer for handling updates to todo list state.
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// Combine reducers according to the slices of state they manage.
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
