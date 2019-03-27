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
    const { importance } = this.state;

    return (
      <section className={create()}>
        <h1 className={create('Title')}>Create todo</h1>
        {importance &&
          importance.map((color, i) => (
            <div
              className={create('Importance', { color, disabled: true })}
              key={`color_${i}`}
            />
          ))}
        <form action="" onSubmit={this.submit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required={true}
            onChange={e => this.setState({ title: e.target.value.trim() })}
          />
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            required={true}
            onChange={e => this.setState({ text: e.target.value.trim() })}
          />
          <span>Importance</span>
          <div
            className={create('Importance', { color: 'red' })}
            onClick={e => this.onImportance(e, 'red')}
          />
          <div
            className={create('Importance', { color: 'green' })}
            onClick={e => this.onImportance(e, 'green')}
          />
          <div
            className={create('Importance', { color: 'orange' })}
            onClick={e => this.onImportance(e, 'orange')}
          />
          <div
            className={create('Importance', { color: 'purple' })}
            onClick={e => this.onImportance(e, 'purple')}
          />
          <div
            className={create('Importance', { color: 'black' })}
            onClick={e => this.onImportance(e, 'black')}
          />
          <button type="submit">create</button>
        </form>
      </section>
    );
  }

  // on click importance
  private onImportance = (e: any, color: string) => {
    const arr: any = this.state.importance;
    const button = e.target;

    // save state
    if (arr.indexOf(color) === -1) {
      this.setState({ importance: [...arr, color] });
    } else {
      this.setState({ importance: arr.filter((el: string) => el !== color) });
    }

    // change style
    if (button.classList.contains('CreateForm-Importance_active')) {
      button.classList.remove('CreateForm-Importance_active');
    } else {
      button.classList.add('CreateForm-Importance_active');
    }
  };

  // on submit
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
