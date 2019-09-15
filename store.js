import { createStore } from "redux";

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VISIBILITY_FILTERS
} from "./actions";
import todoApp from "./reducers";

// Create redux store.
const store = createStore(todoApp);

// Get copy of the initial state.
const initialState = { ...store.getState() }
console.log(initialState)

// Every time the state changes, log it.
const logState = () => console.log(store.getState())
const unsubscribe = store.subscribe(logState)

// Dispatch some actions.
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_COMPLETED));

// Stop listening to state updates.
unsubscribe();