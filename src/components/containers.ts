import { connect } from "react-redux";

// actions
import { createTodo } from "../actions/createActions";

// components
import CreateForm from "./CreateForm/CreateForm";
import TodoList from "./TodoList/TodoList";

export const Create = connect(
  null,
  { createTodo }
)(CreateForm);

export const List = connect(
  (state: any) => ({
    todos: state.create.todos
  }),
  null
)(TodoList);
