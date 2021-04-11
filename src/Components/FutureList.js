import React, { Component } from 'react';
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";

// components
import Task from "./Task"

class FutureList extends Component {
    render() {
        let tasks = tasksStore.futureTasks.map( task => <Task task={task} key={task.title} />);
        return (
            <div>
                <h3>Future</h3>
                {tasks}
            </div>
        );
    }
}
// for the first commit
export default observer(FutureList);