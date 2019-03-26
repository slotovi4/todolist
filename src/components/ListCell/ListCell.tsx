import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { cn } from '@bem-react/classname';
import { Link } from 'react-router-dom';

// styles
import './ListCell.scss';

interface IProps {
  todo: ITodo;
}

const ListCell = ({ todo }: IProps) => {
  const { title, importance, id } = todo;
  const cell = cn('ListCell');

  return (
    <Link to={`/todo/${id}`}>
      <article className={cell()}>
        <h5 className={cell('Title')}>{title}</h5>
        <span className={cell('Importance')}>{importance}</span>
      </article>
    </Link>
  );
};

export default ListCell;
