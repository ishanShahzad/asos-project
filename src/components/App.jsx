import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
class App extends Component {
  state = {
    country: "",
    city: ""
  };
  componentDidMount() {
    console.log("hello");
    axios.get("https://ipapi.co/json/").then(res =>
      this.setState({
        country: res.data.country_name,
        city: res.data.city
      })
    );
  }
  render() {
    console.log(this.state, "state");
    return (
      <div className="app">
        <Header name={this.state} />
      </div>
    );
  }
}
export default App;
