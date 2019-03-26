import * as React from 'react';
import { ITodo } from '../../actions/interface';

interface IProps {
  todo: ITodo;
}

const ListCell = ({ todo }: IProps) => {
  const { title, importance } = todo;

  return (
    <article>
      <header>
        <h5>{title}</h5>
        <span>{importance}</span>
      </header>
    </article>
  );
};

export default ListCell;
