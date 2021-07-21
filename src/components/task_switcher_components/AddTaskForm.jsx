import { Component } from "react";

export default class AddTaskForm extends Component {

    state = {
        title: '',
        date: '',
        checked: false
    }

    changeTitle = (e) => {
        this.setState({...this.state, title: e.target.value});
    };

    changeDate = (e) => {
        this.setState({...this.state, date: e.target.value});
    };
    
    handleCheck = e => {
        this.setState({ ...this.state, checked: !this.state.checked });
    };

    handleClick = () => {
        if (this.state.title !== '' && this.state.date !== ''){
            this.props.addTask(this.state.title, this.state.date, this.state.checked);
            this.setState({ ...this.state, title: '', date: '' });
        }
    };

    render () {
        return (
            <>
                <input className="formInput" type="text" value={this.state.title} placeholder="Title..." onChange={this.changeTitle} /><br/>
                <input className="formInput" type="text" value={this.state.date} placeholder="Date..." onChange={this.changeDate}/><br/>
                <input type="checkbox" onChange={this.handleCheck}/> enabled<br/>
                <button className="formButton" onClick={() => this.handleClick() }>Add</button>
            </>
        );
    }
}