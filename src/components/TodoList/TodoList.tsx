import * as React from 'react';
import { ITodo } from '../../actions/interface';

// components
import ListCell from '../ListCell/ListCell';

interface IProps {
  deleteTodo: (id: string) => void;
  todos: ITodo[];
}

const TodoList = ({ todos, deleteTodo }: IProps) => (
  <section>
    <h1>Toso list</h1>
    {todos && todos.length
      ? todos.map((todo, i) => (
          <ListCell todo={todo} deleteTodo={deleteTodo} key={`todo_${i}`} />
        ))
      : null}
  </section>
);

export default TodoList;
