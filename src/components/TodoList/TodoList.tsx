import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { cn } from '@bem-react/classname';

// components
import ListCell from '../ListCell/ListCell';

// styles
import './TodoList.scss';

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => {
  const list = cn('TodoList');

  return (
    <section className={list()}>
      {todos && todos.length ? (
        todos.map((todo, i) => <ListCell todo={todo} key={`todo_${i}`} />)
      ) : (
        <div className={list('Empty')}>
          <h2 className={list('Message')}>Toto list is empty!</h2>
        </div>
      )}
    </section>
  );
};

export default TodoList;
