import React, { Component } from "react";
import Datetime from "react-datetime";
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";
//import css
import "../DatetimePicker.css";

class CreateTaskForm extends Component {
  state = {
    title: "",
    details: "",
    due:""
  };
  //method to add task to the todo list
  addTask = () => {
    //   statement that forces you to add a title to a task before submitting
      if(this.state.title) {
      this.props.addTask(this.state.title, this.state.details, this.state.due);
    //   when changing the values in the inputs, the state will reset and trigger a re-render of the site.
      this.setState({ title: "", details: "", due:"" })
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
    <Datetime 
        defaultValue="Optional Due Date"
        value={this.state.due}
        onChange={momentObj => {
            this.setState({ due: momentObj });
        }}
    />
    <input type="submit" value="Create Task" onClick={this.addTask} />
    </div>
    );
  }
}

export default observer(CreateTaskForm);
