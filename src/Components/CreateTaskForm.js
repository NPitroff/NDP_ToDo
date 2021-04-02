import React, { Component } from "react";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
  };
  render() {
    return (
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          this.setState({ title: e.target.value });
        }}
      />
    );
  }
}

export default CreateTaskForm;
