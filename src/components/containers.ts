import { connect } from "react-redux";

// actions
import { createTodo, deleteTodo } from "../actions/todoActions";

// components
import CreateForm from "./CreateForm/CreateForm";
import TodoList from "./TodoList/TodoList";

export const Create = connect(
  null,
  { createTodo }
)(CreateForm);

export const List = connect(
  (state: any) => ({
    todos: state.todo.todos
  }),
  { deleteTodo }
)(TodoList);
