import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { Link } from 'react-router-dom';

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

    return (
      <section>
        <header>
          <h1>{title}</h1>
          <span>{importance}</span>
        </header>
        <span>{text}</span>
        <Link to={`/edit/${id}`}>change</Link>
        <button onClick={() => deleteTodo(id)}>delete</button>
      </section>
    );
  }
}

export default Todo;
