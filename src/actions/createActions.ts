import { createTypes } from "./types";

const { CREATE_TODO } = createTypes;

export const createTodo = () => (dispatch: any) =>
  dispatch({ type: CREATE_TODO });
