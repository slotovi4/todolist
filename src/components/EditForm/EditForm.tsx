import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { History } from 'history';

interface IProps {
  editTodo: (todo: ITodo) => void;
  id: string;
  history: History;
}

class EditForm extends React.Component<IProps> {
  private formRef = React.createRef<HTMLFormElement>();

  public render() {
    return (
      <section>
        <h1>Edit todo</h1>
        <form action='' onSubmit={this.submit} ref={this.formRef}>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='todo_title' required={true} />
          <label htmlFor='text'>Text</label>
          <input type='text' id='text' name='todo_text' required={true} />
          <span>Importance</span>
          <input type='range' min='0' max='5' name='todo_importance' />
          <button type='submit'>save</button>
        </form>
      </section>
    );
  }

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = this.formRef.current;
    const { editTodo, id, history } = this.props;

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
