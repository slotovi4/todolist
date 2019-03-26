import * as React from 'react';
import { ITodo } from '../../actions/interface';

// components
import Todo from '../Todo/Todo';

interface IProps {
  deleteTodo: (id: string) => void;
  todos: ITodo[];
}

class TodoList extends React.Component<IProps> {
  public render() {
    const { todos, deleteTodo } = this.props;

    return (
      <section>
        <h1>Toso list</h1>
        {todos && todos.length
          ? todos.map((todo, i) => (
              <Todo
                todo={todo}
                index={i}
                deleteTodo={deleteTodo}
                key={`todo_${i}`}
              />
            ))
          : null}
      </section>
    );
  }
}

export default TodoList;
