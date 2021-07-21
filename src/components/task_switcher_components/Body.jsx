import { Component } from "react";
import Task from "./Task";

export default class Body extends Component {

    render () {


        return (
            <div className="tasks" >
                <center>
                    {
                        this.props.tasks.map((val, i) => {
                            return (
                                <Task 
                                    key={i} 
                                    val={val} 
                                    i={i} 
                                    selectToggle={this.props.selectToggle}
                                    removeTask={this.props.removeTask}
                                />
                            )
                        })
                    }
                </center>
                
            </div>
        );
    }
}
/*

*/