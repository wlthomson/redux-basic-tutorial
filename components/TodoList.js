import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  const todoMapper = (todo, index) => (
    <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
  );
  const todoList = todos.map(todoMapper);
  return <ul>{todoList}</ul>;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
