import { connect } from "react-redux";

// actions
import { createTodo } from "../actions/createActions";

// components
import CreateTodo from "./CreateTodo/CreateTodo";

export const Create = connect(
  null,
  { createTodo }
)(CreateTodo);
