import { Component } from "react";
import AddTaskForm from "./AddTaskForm";

export default class Heading extends Component {

    state = {
        addTaskForm: true
    };

    toggleAddTask = () => {
        this.setState({ addTaskForm: !this.state.addTaskForm })
    };

    render () {
        return (
            <>
                <div className='head'>
                    <h1 className="taskHead">{this.props.name}</h1>
                    <div className='addTask'>
                        <button className='tsLeft' onClick={() => this.toggleAddTask()}>{this.state.addTaskForm ? 'Add' : 'Hide' }</button>
                        <button className='tsRight' onClick={() => this.props.removeTaskSwitcher(this.props.id) }>Remove</button>
                    </div>
                </div>
                <div className={ this.state.addTaskForm ? 'hiddenAddTask' : ''}>
                    <AddTaskForm addTask={this.props.addTask}/>
                </div>
                
            </>
        );
    }
}