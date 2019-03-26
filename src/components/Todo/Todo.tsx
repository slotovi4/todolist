import * as React from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../../actions/interface';

interface IProps {
  todo: ITodo;
  index: number;
  deleteTodo: (id: string) => void;
}

const Todo: React.FunctionComponent<IProps> = ({ todo, index, deleteTodo }) => (
  <article key={`todo_${index}`}>
    <header>
      <h5>{todo.title}</h5>
      <span>{todo.importance}</span>
    </header>
    <span>{todo.text}</span>
    <button onClick={() => deleteTodo(todo.id)}>delete</button>
    <Link to={`/edit/${todo.id}`}>Edit</Link>
  </article>
);

export default Todo;
