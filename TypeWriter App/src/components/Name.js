import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.interval=null;
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
    // Stop when the full name has been displayed
    if (this.state.curIndex >= this.state.fullName.length - 1) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  componentDidUpdate(prevProps) {
    // Start the interval if showName is true and was previously false
    if (this.props.showName && !prevProps.showName) {
      this.setState({ curIndex: 0, currentName: "" }); // Reset display
      this.interval = setInterval(this.typeWriterEffect, 500);
    }

    // Clear the interval if showName is false and was previously true
    if (!this.props.showName && prevProps.showName) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  // Required lifecycle methods here
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
