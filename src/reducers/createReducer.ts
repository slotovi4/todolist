import { createTypes } from "../actions/types";
import { ITodo } from "../actions/interface";

const { CREATE_TODO } = createTypes;

const initialState = {
  todos: []
};

interface IAction {
  type: "CREATE_TODO" | null;
  todo?: ITodo;
}

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.todo, ...state.todos]
      };
    default:
      return state;
  }
};
