import * as React from "react";
import * as uuid from "uuid";
import { ITodo } from "../../actions/interface";
import { History } from "history";

interface IProps {
  createTodo: (todo: ITodo) => void;
  history: History;
}

class CreateForm extends React.Component<IProps> {
  private formRef = React.createRef<HTMLFormElement>();

  public render() {
    return (
      <section>
        <h1>Create todo</h1>
        <form action="" onSubmit={this.submit} ref={this.formRef}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="todo_title" required={true} />
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="todo_text" required={true} />
          <span>Importance</span>
          <input type="range" min="0" max="5" name="todo_importance" />
          <button type="submit">create</button>
        </form>
      </section>
    );
  }

  private submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = this.formRef.current;

    if (form) {
      const data = new FormData(form);
      const title = data.get("todo_title") as string;
      const text = data.get("todo_text") as string;
      const importance = data.get("todo_importance") as string;
      const id = uuid();

      this.props.createTodo({ title, text, importance, id });
      this.props.history.push("/");
    }
  };
}

export default CreateForm;
