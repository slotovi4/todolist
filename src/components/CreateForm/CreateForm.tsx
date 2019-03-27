import * as React from 'react';
import * as uuid from 'uuid';
import { ITodo } from '../../actions/interface';
import { History } from 'history';
import { cn } from '@bem-react/classname';

// styles
import './CreateForm.scss';

interface IProps {
  createTodo: (todo: ITodo) => void;
  history: History;
}

interface IState {
  title: string;
  text: string;
  importance: string[];
}

class CreateForm extends React.Component<IProps, IState> {
  public state = {
    title: '',
    text: '',
    importance: []
  };

  public render() {
    const create = cn('CreateForm');
    const { title, text } = this.state;

    return (
      <section className={create()}>
        <h1 className={create('Title')}>Create todo</h1>
        <form action="" onSubmit={this.submit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required={true}
            defaultValue={title}
            onChange={e => this.setState({ title: e.target.value.trim() })}
          />
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            required={true}
            defaultValue={text}
            onChange={e => this.setState({ text: e.target.value.trim() })}
          />
          <span>Importance</span>
          <label
            className={create('Importance', { color: 'red' })}
            htmlFor="red"
            onClick={() => this.onImportance('red')}
          />
          <label
            className={create('Importance', { color: 'green' })}
            htmlFor="green"
            onClick={() => this.onImportance('green')}
          />
          <label
            className={create('Importance', { color: 'orange' })}
            htmlFor="opange"
            onClick={() => this.onImportance('orange')}
          />
          <label
            className={create('Importance', { color: 'purple' })}
            htmlFor="purple"
            onClick={() => this.onImportance('purple')}
          />
          <label
            className={create('Importance', { color: 'black' })}
            htmlFor="black"
            onClick={() => this.onImportance('black')}
          />
          <button type="submit">create</button>
        </form>
      </section>
    );
  }

  private onImportance = (color: string) => {
    const arr: any = this.state.importance;

    if (arr.indexOf(color) === -1) {
      this.setState({ importance: [...arr, color] });
    } else {
      this.setState({ importance: arr.filter((el: string) => el !== color) });
    }
  };

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { createTodo } = this.props;
    const { title, text, importance } = this.state;

    const id = uuid();

    if (title !== '') {
      createTodo({ title, text, importance, id });
      this.props.history.push('/');
    }
  };
}

export default CreateForm;
