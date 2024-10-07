import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (newTodo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { text: newTodo }]
    }));
  };

  handleRemove = (index) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, i) => i !== index)
    }));
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and functions as props */}
        <Form onAdd={this.handleAdd} />
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}
