import React, { Component } from 'react';

// components
import Task from "./Task"

class TodayList extends Component {
    render() {
        let tasks = this.props.tasks.map( task => <Task task={task} key={task.title} />);
        return (
            <div>{tasks}</div>
        );
    }
}
// for the first commit
export default TodayList;
