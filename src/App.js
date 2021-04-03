import React, { Component } from "react";

// component
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";

class App extends Component {
  state = {
    tasks: [
      // default static data to hold while writing the app
      {
        title: "Drink a Smoothie",
        details: "Prepare a blueberry smoothie."
      },
      {
        title: "Get my coffee and head to work",
        details: "Start your first day with a hot coffee!"
      }
    ]
  }
  // method to add tasks to the todo list
  addTask = (title, details) => {
    let newTask = { title: title, details: details };
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks: tasks })
  };
  
  render() {

    return (
      <div className="App">
        <CreateTaskForm />
      <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
