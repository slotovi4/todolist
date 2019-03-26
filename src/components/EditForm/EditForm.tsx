import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { History } from 'history';

interface IProps {
  todos: ITodo[];
  match: any;
  history: History;
  editTodo: (todo: ITodo) => void;
}

class EditForm extends React.Component<IProps> {
  public state = {
    todo: { title: '', text: '', importance: '0' },
    id: ''
  };

  public formRef = React.createRef<HTMLFormElement>();

  public componentWillMount() {
    const { todos, match } = this.props;
    const id = match.params.id;

    const todo = todos.find(el => el.id === id);

    if (todo) {
      this.setState({ todo, id });
    }
  }

  public render() {
    const { title, text, importance } = this.state.todo;

    return (
      <section>
        <h1>Edit todo</h1>
        <form action="" onSubmit={this.submit} ref={this.formRef}>
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
          <input
            type="range"
            min="0"
            max="5"
            name="todo_importance"
            defaultValue={importance}
          />
          <button type="submit">save</button>
        </form>
      </section>
    );
  }

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = this.formRef.current;
    const { editTodo, history } = this.props;
    const { id } = this.state;

    if (form) {
      const data = new FormData(form);
      const title = data.get('todo_title') as string;
      const text = data.get('todo_text') as string;
      const importance = data.get('todo_importance') as string;

      editTodo({ title, text, importance, id });
      history.push('/');
    }
  };
}

export default EditForm;
