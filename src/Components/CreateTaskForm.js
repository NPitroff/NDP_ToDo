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
      }
  };

  render() {
    return (
        <div>
        {/*  To input the title of the task */}
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          this.setState({ title: e.target.value });
        }}
      />
    //   to enter the description of the task
    <textarea 
    placeholder="Describe your task!"
    onChange ={e => {
        this.setState({ detals: e.target.value });
    }}/>
    <input type="submit" value="Create Task" onClick={this.addTask} />
    </div>
    );
  }
}
// I love coding!

export default CreateTaskForm;
