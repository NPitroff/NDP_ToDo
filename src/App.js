import React, { Component } from "react";

// component
import TodayList from "./Components/TodayList";

class App extends Component() {
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
  render() {

    return (
      <TodayList tasks={this.state.tasks} />
    );
  }
}
export default App;
