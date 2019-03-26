import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { cn } from '@bem-react/classname';

// styles
import './ListCell.scss';

interface IProps {
  todo: ITodo;
}

const ListCell = ({ todo }: IProps) => {
  const { title, importance } = todo;
  const cell = cn('ListCell');

  return (
    <article className={cell()}>
      <h5 className={cell('Title')}>{title}</h5>
      <span className={cell('Importance')}>{importance}</span>
    </article>
  );
};

export default ListCell;
