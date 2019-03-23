import { connect } from "react-redux";

// actions
import { createTodo } from "../actions/createActions";

// components
import CreateForm from "./CreateForm/CreateForm";

export const Create = connect(
  null,
  { createTodo }
)(CreateForm);
