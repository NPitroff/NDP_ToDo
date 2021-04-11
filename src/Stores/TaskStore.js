import react from "react";

class TasksStore {
    tasks = [
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
    ];
      futureTasks = [];
}

// method to add tasks to the todo list
addTask = (title, details, due) => {
    let newTask = { title: title, details: details, due: due };
    if (due && due.isAfter(moment(), "day")) {
    let tasks = this.futureTasks;
    tasks.push(newTask);
    this.futureTasks = tasks
    } else {
      let tasks = this.tasks;
      tasks.push(newTask);
      this.tasks = tasks
    }
    // method call to save to local storage
    this.updateLocalStorage();
    
  };

  // method to stringify the todo lists and save to local storage
  updateLocalStorage = () => {
    let tasks = JSON.stringify({
      tasks: this.tasks,
      futureTasks: this.tasks
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
    tasks.futureTasks.forEach(task => {
      if (task.due) task.due = moment(task.due);
    });
      this({ 
        tasks: tasks.tasks,
        futureTasks: tasks.futureTasks 
      });
    }
  };

const tasksStore = new TasksStore();

export default tasksStore;