import { todoTypes } from './types';
import { ITodo } from './interface';
import { Dispatch } from 'react';

const { CREATE_TODO, DELETE_TODO, EDIT_TODO } = todoTypes;

export const createTodo = (todo: ITodo) => (dispatch: Dispatch<object>) =>
  dispatch({ type: CREATE_TODO, todo });

export const deleteTodo = (id: string) => (dispatch: Dispatch<object>) =>
  dispatch({ type: DELETE_TODO, id });

export const editTodo = (todo: ITodo) => (dispatch: Dispatch<object>) =>
  dispatch({ type: EDIT_TODO, todo, id: todo.id });
