import * as React from "react";

interface IProps {
  sendTodo: (todo: any) => void;
}

class TodoForm extends React.Component<IProps> {
  private formRef = React.createRef<HTMLFormElement>();

  public render() {
    return (
      <section>
        <h1>Create todo</h1>
        <form action="" onSubmit={this.submit} ref={this.formRef}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="todo_title" />
          <label htmlFor="text">Text</label>
          <input type="text" id="text" name="todo_text" />
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
      const title = data.get("todo_title");
      const text = data.get("todo_text");
      const importance = data.get("todo_importance");

      this.props.sendTodo({ title, text, importance });
    }
  };
}

export default TodoForm;
