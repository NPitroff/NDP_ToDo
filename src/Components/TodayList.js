import React, { Component } from 'react';
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";

// components
import Task from "./Task"

class TodayList extends Component {
    render() {
        let tasks = tasksStore.tasks.map( task => <Task task={task} key={task.title} />);
        return (
            <div>
                <h3>Today</h3>
                {tasks}
            </div>
        );
    }
}
// for the first commit
export default observer(TodayList);
