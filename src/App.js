import React, { Component } from "react";
import moment from "moment";
// component
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import FutureList from "./Components/FutureList";

class App extends Component {
  state = {
    tasks: [
      // default static data to hold while writing the app
      {
        title: "Drink a Smoothie",
        details: "Prepare a blueberry smoothie.",
        due: moment()
      },
      {
        title: "Get my coffee and head to work",
        details: "Start your first day with a hot coffee!",
        due: moment()
      }
    ],
    futureTasks: []
  }

  // method to stringify the todo lists and save to local storage
  updateLocalStorage = () => {
    let tasks = JSON.stringify({
      tasks: this.state.tasks,
      futureTasks: this.state.tasks
    });
    localStorage.setItem("tasks", tasks);
  };

  // method to parse the JSON data from local storage and back into objects
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.tasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
    });
      this.setState({ tasks: tasks.tasks });
    }
  };

  // method to add tasks to the todo list
  addTask = (title, details, due) => {
    let newTask = { title: title, details: details, due: due };
    if (due && due.isAfter(moment(), "day")) {
    let tasks = this.state.futureTasks;
    tasks.push(newTask);
    this.setState({ futureTasks: tasks })
    } else {
      let tasks = this.state.tasks;
      tasks.push(newTask);
      this.setState({ tasks: tasks })
    }
    // method call to save to local storage
    this.updateLocalStorage();
    
  };

  // method to call the retrieveFromLocalStorage method on page load
  componentDidMount() {
    this.retrieveFromLocalStorage();
  }
  

  render() {

    return (
      <div className="App">
        <CreateTaskForm addTask = {this.addTask} />
      <TodayList tasks={this.state.tasks} />
      <FutureList tasks={this.state.futureTasks} />
      </div>
    );
  }
}
// remember to style tomorrow
// do at least 15 commits
export default App;
