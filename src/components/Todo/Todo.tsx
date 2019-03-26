import * as React from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../../actions/interface';

interface IProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
}

const Todo = ({ todo, deleteTodo }: IProps) => {
  const { title, importance, text, id } = todo;

  return (
    <article>
      <header>
        <h5>{title}</h5>
        <span>{importance}</span>
      </header>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>delete</button>
      <Link to={`/edit/${id}`}>Edit</Link>
    </article>
  );
};

export default Todo;
