import { connect } from "react-redux";

// actions
import { createTodo } from "../actions/createActions";

// components
import TodoForm from "./TodoForm/TodoForm";

export const Create = connect(
  null,
  { createTodo }
)(TodoForm);
