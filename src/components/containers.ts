import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

// actions
import { createTodo, editTodo } from '../actions/todoActions';

// components
import CreateForm from './CreateForm/CreateForm';
import EditForm from './EditForm/EditForm';
import TodoList from './TodoList/TodoList';
import Home from './Home/Home';
import PageHOC from './PageHOC/PageHOC';

// connect
export const Create = compose(
  withRouter,
  connect(
    null,
    { createTodo }
  )
)(CreateForm);

export const Edit = connect(
  (state: any) => ({
    todos: state.todo.todos
  }),
  { editTodo }
)(EditForm);

export const List = connect((state: any) => ({
  todos: state.todo.todos
}))(TodoList);

// pages
export const HomePage = () => PageHOC(Home);
export const CreatePage = () => PageHOC(Create);
export const EditPage = () => PageHOC(Edit);
