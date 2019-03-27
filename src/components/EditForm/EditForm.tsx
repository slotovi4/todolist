import * as React from 'react';
import { ITodo } from '../../actions/interface';
import { History } from 'history';
import { cn } from '@bem-react/classname';

// styles
import './EditForm.scss';

interface IProps {
  todos: ITodo[];
  match: any;
  history: History;
  editTodo: (todo: ITodo) => void;
}

interface IState {
  title: string;
  text: string;
  importance: string[];
  id: string;
}

class EditForm extends React.Component<IProps, IState> {
  public state = {
    title: '',
    text: '',
    importance: [],
    id: ''
  };

  public componentWillMount() {
    const { todos, match, history } = this.props;
    const todoId = match.params.id;

    const todo = todos.find(el => el.id === todoId);

    if (todo) {
      const { title, text, importance, id } = todo;
      this.setState({ title, text, importance, id });
    } else {
      history.push('/');
    }
  }

  public render() {
    const { title, text, importance } = this.state;
    const edit = cn('EditForm');

    return (
      <article className={edit()}>
        <header className={edit('Header')}>
          <h1 className={edit('Title')}>Edit todo</h1>
          <div className={edit('Colors')}>
            {importance &&
              importance.map((color, i) => (
                <div
                  className={edit('Importance', { color, disabled: true })}
                  key={`color_${i}`}
                />
              ))}
          </div>
        </header>

        <form action="" onSubmit={this.submit}>
          <input
            className={edit('Field')}
            type="text"
            required={true}
            defaultValue={title}
            onChange={e => this.setState({ title: e.target.value.trim() })}
          />
          <textarea
            className={edit('Field')}
            required={true}
            rows={10}
            defaultValue={text}
            onChange={e => this.setState({ text: e.target.value.trim() })}
          />
          <div className={edit('ImportanceBlock')}>
            <span>Importance</span>
            <div className={edit('ImportanceList')}>
              {[...Array('red', 'green', 'orange', 'purple', 'black')].map(
                (color, i) => {
                  const active = importance.some(el => el === color);

                  return (
                    <div
                      className={edit('Importance', { color, active })}
                      onClick={e => this.onImportance(e, color)}
                      key={`edit-color_${i}`}
                    />
                  );
                }
              )}
            </div>
          </div>

          <button className={edit('Button')} type="submit">
            save
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
    if (button.classList.contains('EditForm-Importance_active')) {
      button.classList.remove('EditForm-Importance_active');
    } else {
      button.classList.add('EditForm-Importance_active');
    }
  };

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { editTodo, history } = this.props;
    const { title, text, importance, id } = this.state;

    editTodo({ title, text, importance, id });
    history.push('/');
  };
}

export default EditForm;
