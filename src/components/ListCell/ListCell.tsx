import * as React from 'react';
import { ITodo } from '../../actions/interface';

interface IProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
}

const ListCell = ({ todo, deleteTodo }: IProps) => {
  const { title, importance, text, id } = todo;

  return (
    <article>
      <header>
        <h5>{title}</h5>
        <span>{importance}</span>
      </header>
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </article>
  );
};

export default ListCell;
