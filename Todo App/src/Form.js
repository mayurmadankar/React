import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = () => {
    if (this.state.text) {
      this.props.onAdd(this.state.text);
      this.setState({ text: "" }); // Clear input after adding
    }
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="What's on your mind?"
          required
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}
