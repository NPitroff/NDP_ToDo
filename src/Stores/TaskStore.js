import react from "react";

class TasksStore {
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

  // method to stringify the todo lists and save to local storage
  updateLocalStorage = () => {
    let tasks = JSON.stringify({
      tasks: this.state.tasks,
      futureTasks: this.state.tasks
    });
    localStorage.setItem("tasks", tasks);
  };

const tasksStore = new TasksStore();

export default tasksStore;