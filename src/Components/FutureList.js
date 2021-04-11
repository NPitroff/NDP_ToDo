import React, { Component } from 'react';

// components
import Task from "./Task"

class FutureList extends Component {
    render() {
        let tasks = this.props.tasks.map( task => <Task task={task} key={task.title} />);
        return (
            <div>
                <h3>Future</h3>
                {tasks}
            </div>
        );
    }
}
// for the first commit
export default FutureList;