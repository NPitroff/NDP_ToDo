import React, { Component } from "react";
import moment from "moment";
// component
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";
import FutureList from "./Components/FutureList";

class App extends Component {

  // method to call the retrieveFromLocalStorage method on page load
  componentDidMount() {
    this.retrieveFromLocalStorage();
  }  

  render() {

    return (
      <div className="App">
        <CreateTaskForm />
        <TodayList  />
        <FutureList />
      </div>
    );
  }
}
// remember to style tomorrow
// do at least 15 commits
export default App;
