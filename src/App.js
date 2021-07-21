import { Component } from 'react';
import './App.css';
import './bootstrap-icons/bootstrap-icons.css'
import TaskSwitcher from './components/TaskSwitcher';

class App extends Component {

  state = {
    task: [],
    hideTaskNameQuery: true,
    blur: false,
    newTitle: ''
  };

  onPlusClicked = () => {

    const fakeState = { ...this.state };
    fakeState.blur = !fakeState.blur;
    fakeState.hideTaskNameQuery = !fakeState.hideTaskNameQuery;

    this.setState(fakeState);
  };

  updateNewTask = e => {
    const newTitle = e.target.value;
    this.setState({ ...this.state, newTitle });
  };

  onCreate = () => {

    const fakeState = { ...this.state };
    fakeState.blur = !fakeState.blur;
    fakeState.hideTaskNameQuery = !fakeState.hideTaskNameQuery;
    fakeState.task.push( fakeState.newTitle );
    fakeState.newTitle = '';

    this.setState(fakeState);
  };

  removeTaskSwitcher = id => {
    const task = this.state.task.filter( (val, i) => (id !== i) );
    this.setState({ ...this.state, task });
  };

  // TNQ -> Task Name Query
  // MH  -> main Head

  render(){

    const classnameMH = `taskSwitchers ${this.state.blur ? 'blur' : ''}`;
    const noTaskSwitcher = `noTaskSwitcher ${this.state.blur ? 'blur' : ''}`;
    const classnameTNQ = `taskNameQuery ${this.state.hideTaskNameQuery ? 'hide' : ''}`;
    const plusClass = `plus ${ this.state.hideTaskNameQuery ? 'bi-plus' : 'bi-x' }`;

    return (
      <div className="App">

        {
          this.state.task.length !== 0 ?
            <div className={classnameMH}>
              {
                this.state.task.map((val, i) => (
                  <TaskSwitcher key={i} name={val} id={i} removeTaskSwitcher={this.removeTaskSwitcher}/>
                ))
              }
            </div>
          :
            <div className={noTaskSwitcher}>
              There are no Task Switchers to show.<br/>
              Click on '+' to create a new task.
            </div>
        }

        <div className="mainHead">
          <div className="mainTitle bi-file-ruled">Task Switcher</div>
          <div className={plusClass} onClick={this.onPlusClicked}></div>
        </div>

        <div className={classnameTNQ}>
          <div>Input the name of the task.</div>
          <input type="input" maxLength={16} placeholder="Task name..." value={this.state.newTitle} onChange={this.updateNewTask}/><br/>
          <button onClick={this.onCreate}>Create</button>
        </div>
      </div>
    );
  }
}

export default App;
