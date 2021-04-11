import React, { Component } from 'react';
import tasksStore from "../Stores/TasksStore";
import { observer } from "mobx-react";

class Task extends Component {
    render() {
        let dueDate;
        if (this.props.task.due)
            dueDate = <span> - {this.props.task.due.fromNow()}</span>
        return (
            <p>
                {this.props.task.title} - {this.props.task.details} {dueDate}
            </p>
        );
    }
}
// reset this commit

export default Task;
