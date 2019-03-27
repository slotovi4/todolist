import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

// styles
import './Todo.scss';

interface IProps {
  match: any;
  todos: ITodo[];
  deleteTodo: (id: string) => void;
}

class Todo extends React.Component<IProps> {
  public state = {
    todo: { title: '', text: '', importance: '0' },
    id: ''
  };

  public componentWillReceiveProps(NextProps: IProps) {
    const { id } = this.state;
    const newId = NextProps.match.params.id;

    if (newId !== id) {
      const { todos } = NextProps;
      const todo = todos.find(el => el.id === newId);

      if (todo) {
        this.setState({ todo, id: newId });
      }
    }
  }

  public componentWillMount() {
    const { todos, match } = this.props;
    const id = match.params.id;
    const todo = todos.find(el => el.id === id);

    if (todo) {
      this.setState({ todo, id });
    }
  }

  public render() {
    const { deleteTodo } = this.props;
    const { id } = this.state;
    const { title, text, importance } = this.state.todo;
    const todo = cn('Todo');

    return (
      <article className={todo()}>
        <header className={todo('Header')}>
          <h1 className={todo('Title')}>{title}</h1>
          <span className={todo('Importance')}>{importance}</span>
        </header>
        <span className={todo('Text')}>{text}</span>
        <footer className={todo('Footer')}>
          <Link className={todo('Button', { type: 'edit' })} to={`/edit/${id}`}>
            change
          </Link>
          <button
            className={todo('Button', { type: 'delete' })}
            onClick={() => deleteTodo(id)}
          >
            delete
          </button>
        </footer>
      </article>
    );
  }
}

export default Todo;
