import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
class App extends Component {
  state = {
    country: "",
    city: "",
    value: "",
    task: []
  };
  // componentDidMount() {
  //   console.log("hello");
  //   axios.get("https://ipapi.co/json/").then(res =>
  //     this.setState({
  //       country: res.data.country_name,
  //       city: res.data.city
  //     })
  //   );
  // }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      task: [...this.state.task, this.state.value],
      value: ""
    });
  };
  handleDelete = i => {
    console.log("hello", i);
    let taskCp = this.state.task;
    taskCp.splice(i, 1);
    this.setState({
      task: taskCp
    });
  };
  handleUp = i => {
    console.log(i);
    let taskCp = this.state.task;
    let element = taskCp.splice(i, 1);
    console.log(element);

    taskCp.splice(i, 0, ...element);
    console.log(taskCp);

    this.setState({
      task: taskCp
    });
  };
  render() {
    console.log(this.state, "state");
    let response = this.state.task.map((task, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{task}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(index)}
            >
              DEL
            </button>
            <button className="btn btn-success">EDIT</button>
            <button
              className="btn btn-info"
              onClick={() => this.handleUp(index)}
            >
              UP
            </button>
            <button className="btn btn-primary">DOWN</button>
          </td>
        </tr>
      );
    });
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button>ADD TASK</button>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tasks</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody>{response}</tbody>
        </table>
        {/* <Header name={this.state} /> */}
      </div>
    );
  }
}
export default App;
