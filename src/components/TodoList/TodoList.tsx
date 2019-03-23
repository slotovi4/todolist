import * as React from "react";
import { ITodo } from "../../actions/interface";

interface IProps {
  todos: ITodo[];
}

class TodoList extends React.Component<IProps> {
  public render() {
    const { todos } = this.props;

    return (
      <section>
        <h1>Toso list</h1>
        {todos && todos.length
          ? todos.map(({ title, text, importance }, index) => (
              <article key={`todo_${index}`}>
                <header>
                  <h5>{title}</h5>
                  <span>{importance}</span>
                </header>
                <span>{text}</span>
              </article>
            ))
          : null}
      </section>
    );
  }
}

export default TodoList;
