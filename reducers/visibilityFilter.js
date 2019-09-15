import { VISIBILITY_FILTERS } from '../actions'

// Reducer for handling updates to visibility filter state.
function visibilityFilter(state = VISIBILITY_FILTERS.SHOW_ALL, action) {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }

  export default visibilityFilter