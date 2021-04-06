import React, { Component } from "react";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
  };
  //method to add task to the todo list
  addTask = () => {
    //   statement that forces you to add a title to a task before submitting
      if(this.state.title) {
      this.props.addTask(this.state.title, this.state.details);
    //   when changing the values in the inputs, the state will reset and trigger a re-render of the site.
      this.setState({ title: "", details: "" })
      }
  };

  render() {
    return (
        <div>
        {/*  To input the title of the task */}
      <input
        type="text"
        placeholder="Title"
        value={this.state.title}
        onChange={(e) => {
          this.setState({ title: e.target.value });
        }}
      />
    {/*  to enter the description of the task */}
    <textarea 
    placeholder="Describe your task!"
    value={this.state.details}
    onChange ={e => {
        this.setState({ details: e.target.value });
    }}/>
    <input type="submit" value="Create Task" onClick={this.addTask} />
    </div>
    );
  }
}

export default CreateTaskForm;
