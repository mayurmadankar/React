import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, index) => (
          <Todo key={index} todo={todo} onRemove={() => this.props.onRemove(index)} />
        ))}
      </div>
    );
  }
}