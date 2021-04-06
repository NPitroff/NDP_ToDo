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

  // method to stringify the todo lists and save to local storage
  updateLocalStorage = () => {
    let tasks = JSON.stringify({
      tasks: this.state.tasks
    });
    localStorage.setItem("tasks", tasks);
  };

  // method to parse the JSON data from local storage and back into objects
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({ tasks: tasks.tasks });
    }
  };

  // method to add tasks to the todo list
  addTask = (title, details) => {
    let newTask = { title: title, details: details };
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks: tasks })
    // method call to save to local storage
    this.updateLocalStorage();
  };
  

  render() {

    return (
      <div className="App">
        <CreateTaskForm addTask = {this.addTask} />
      <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
}
export default App;
