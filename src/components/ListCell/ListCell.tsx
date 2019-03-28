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
        <h5 className={cell('Title')} title={title}>
          {title}
        </h5>
        <div className={cell('ImportanceBlock')}>
          {importance && importance.length ? (
            importance.map((color, i) => (
              <div
                className={cell('Importance', { color })}
                key={`cell-color_${i}`}
              />
            ))
          ) : (
            <div className={cell('Icon')} />
          )}
        </div>
      </article>
    </Link>
  );
};

export default ListCell;
