import React, { Component } from "react";
import moment from "moment";
// component
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import FutureList from "./Components/FutureList";

class App extends Component {

  

  // method to parse the JSON data from local storage and back into objects
  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      tasks.tasks.forEach(task => {
        if (task.due) task.due = moment(task.due);
    });
    tasks.futureTasks.forEach(task => {
      if (task.due) task.due = moment(task.due);
    });
      this.setState({ 
        tasks: tasks.tasks,
        futureTasks: tasks.futureTasks 
      });
    }
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
