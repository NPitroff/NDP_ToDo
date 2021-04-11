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

const tasksStore = new TasksStore();

export default tasksStore;