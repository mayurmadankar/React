import { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={this.props.onRemove}>x</button>
      </div>
    );
  }
}
