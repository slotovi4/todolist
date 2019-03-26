import * as React from 'react';
import { ITodo } from '../../actions/interface';

// components
import ListCell from '../ListCell/ListCell';

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => (
  <section>
    <h1>Todo list</h1>
    {todos && todos.length
      ? todos.map((todo, i) => <ListCell todo={todo} key={`todo_${i}`} />)
      : null}
  </section>
);

export default TodoList;
