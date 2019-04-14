import { todoTypes } from '../actions/types';
import { ITodo } from '../actions/interface';

const { CREATE_TODO, DELETE_TODO, EDIT_TODO } = todoTypes;

const initialState = {
  todos: []
};

interface IAction {
  type: 'CREATE_TODO' | 'DELETE_TODO' | null;
  todo?: ITodo;
  id?: string;
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) =>
          todo.id === action.id ? action.todo : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo.id !== action.id)
      };
    default:
      return state;
  }
};
