import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { History } from 'history';

// styles
import './Todo.scss';

interface IProps {
  match: any;
  todos: ITodo[];
  history: History;
  deleteTodo: (id: string) => void;
}

interface IState {
  todo: ITodo;
}

class Todo extends React.Component<IProps, IState> {
  public state = {
    todo: { title: '', text: '', importance: '0', id: '' }
  };

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    const { id } = this.state.todo;

    if (id !== nextState.todo.id) {
      return true;
    }

    return false;
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const { id } = this.state.todo;
    const newId = nextProps.match.params.id;

    if (newId !== id) {
      const { todos } = nextProps;
      const todo = todos.find(el => el.id === newId);

      if (todo) {
        this.setState({ todo });
      }
    }
  }

  public componentWillMount() {
    const { todos, match, history } = this.props;
    const { id } = match.params;

    const todo = todos.find(el => el.id === id);

    if (todo) {
      this.setState({ todo });
    } else {
      history.push('/');
    }
  }

  public render() {
    const { deleteTodo, history } = this.props;
    const { title, text, importance, id } = this.state.todo;
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
            onClick={() => {
              deleteTodo(id);
              history.push('/');
            }}
          >
            delete
          </button>
        </footer>
      </article>
    );
  }
}

export default Todo;
