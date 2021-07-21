import { Component } from "react";

export default class Task extends Component {

    render () {
        const val = this.props.val;
        const i = this.props.i;
        const classname = `task ${val.selected && 'selected'}`;
        
        return (
            <div className='taskContainer'>
                <div className={classname} onDoubleClick={() => this.props.selectToggle(i)}>
                    <div>
                        <h3>{val.title}</h3>
                        <h4>{val.date}</h4>
                    </div>
                    <div className='right bi-x' onClick={() => this.props.removeTask(i)}></div>
                </div>
            </div>
            
        );
    }
}