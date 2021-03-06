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
      <article className={create()}>
        <header className={create('Header')}>
          <h1 className={create('Title')}>Create todo</h1>
          <div className={create('TodoColors')}>
            {importance &&
              importance.map((color, i) => (
                <div
                  className={create('Importance', { color, disabled: true })}
                  key={`color_${i}`}
                />
              ))}
          </div>
        </header>

        <form action='' onSubmit={this.submit}>
          <div className={create('Group')}>
            <input
              className={create('Field')}
              type='text'
              id='title'
              required={true}
              maxLength={20}
              onChange={e => this.setState({ title: e.target.value.trim() })}
            />
            <label className={create('Label')} htmlFor='title'>
              Title
            </label>
          </div>
          <div className={create('Group')}>
            <textarea
              className={create('Field')}
              id='text'
              rows={10}
              required={true}
              onChange={e => this.setState({ text: e.target.value.trim() })}
            />
            <label className={create('Label')} htmlFor='text'>
              Text
            </label>
          </div>

          <div className={create('ImportanceBlock')}>
            <span className={create('Text')}>Importance</span>

            <div className={create('ImportanceList')}>
              {[...Array('red', 'green', 'orange', 'purple', 'black')].map(
                (color, i) => (
                  <div
                    className={create('Importance', { color })}
                    onClick={e => this.onImportance(e, color)}
                    key={`create-color_${i}`}
                  />
                )
              )}
            </div>
          </div>

          <button className={create('Button')} type='submit'>
            create
          </button>
        </form>
      </article>
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
