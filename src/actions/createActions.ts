import { createTypes } from "./types";
import { ITodo } from "./interface";

const { CREATE_TODO } = createTypes;

export const createTodo = (todo: ITodo) => (dispatch: any) =>
  dispatch({ type: CREATE_TODO, todo });
