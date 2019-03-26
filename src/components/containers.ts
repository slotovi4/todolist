import { connect } from 'react-redux';

// actions
import { createTodo, deleteTodo, editTodo } from '../actions/todoActions';

// components
import CreateForm from './CreateForm/CreateForm';
import EditForm from './EditForm/EditForm';
import TodoList from './TodoList/TodoList';

export const Create = connect(
  null,
  { createTodo }
)(CreateForm);

export const Edit = connect(
  (state: any) => ({
    todos: state.todo.todos
  }),
  { editTodo }
)(EditForm);

export const List = connect(
  (state: any) => ({
    todos: state.todo.todos
  }),
  { deleteTodo }
)(TodoList);
