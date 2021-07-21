import { Component } from "react";
import Body from "./task_switcher_components/Body";
import Heading from "./task_switcher_components/Heading";

export default class TaskSwitcher extends Component {

    state = {
        tasks: []
    };

    addTask = (title, date, selected) => {
        let falseTask = [ ...this.state.tasks ];
        falseTask.push( {title, date, selected } );
        this.setState({ tasks: falseTask });
    };

    removeTask = id => {
        const tasks = this.state.tasks.filter( task => (this.state.tasks[id] !== task));
        this.setState({tasks});
    };

    selectToggle = id => {
        const tasks = this.state.tasks;
        tasks[id].selected = !tasks[id].selected;
        this.setState({ tasks })
    };

    render () {
        return (
            <div className="taskSwitcher">
                <Heading addTask={this.addTask} name={this.props.name} id={this.props.id} removeTaskSwitcher={this.props.removeTaskSwitcher} />
                {
                    this.state.tasks.length === 0 ?
                        <div className="noTask">There are no tasks to display.</div>
                    :
                        <Body tasks={this.state.tasks} removeTask={this.removeTask} selectToggle={this.selectToggle}/>
                }
            </div>
        );
    }
}