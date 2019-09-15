import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatchTodo }) => {
  let input;

  const getInput = node => {
    input = node;
  };

  const resetInput = () => {
    input.value = "";
  };

  const submitInput = event => {
    event.preventDefault();
    const value = input.value.trim();
    if (value.length > 0) {
      dispatchTodo(value);
      resetInput();
    }
  };

  return (
    <div>
      <form onSubmit={submitInput}>
        <input ref={getInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchTodo: value => dispatch(addTodo(value))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
