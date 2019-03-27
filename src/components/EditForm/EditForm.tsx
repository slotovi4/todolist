import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { History } from 'history';

interface IProps {
  todos: ITodo[];
  match: any;
  history: History;
  editTodo: (todo: ITodo) => void;
}

interface IState {
  todo: ITodo;
}

class EditForm extends React.Component<IProps, IState> {
  public state = {
    todo: { title: '', text: '', importance: [], id: '' }
  };

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
    const { title, text } = this.state.todo;

    return (
      <section>
        <h1>Edit todo</h1>
        <form action="" onSubmit={this.submit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="todo_title"
            required={true}
            defaultValue={title}
          />
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="todo_text"
            required={true}
            defaultValue={text}
          />
          <span>Importance</span>

          <button type="submit">save</button>
        </form>
      </section>
    );
  }

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { editTodo, history } = this.props;
    const { title, text, importance, id } = this.state.todo;

    editTodo({ title, text, importance, id });
    history.push('/');
  };
}

export default EditForm;
