import { ADD_TODO, TOGGLE_TODO } from "../actions";

const addTodo = (state, action) => [...state, { text: action.text, completed: false }];

const toggleTodo = (state, action) =>
  state.map((todo, index) => {
    if (index === action.index) {
      return Object.assign({}, todo, {
        completed: !todo.completed
      });
    }
    return todo;
  });

// Reducer for handling updates to todo list state.
const todos = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
}

export default todos;
