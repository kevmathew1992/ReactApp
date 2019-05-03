import React, { Component } from "react";
import UserComponent from "./admin/user/User.jsx";

class Counter extends Component {
  state = {
    count: 1,
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:8080/user/fetchAllUserDetails")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));

    console.log("componentDidMount -- ", this.state.users);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.fetchCounter()}</span>
        <table className="table table-sm table-light">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>COUNT</th>
            <th>UPDATE COUNT</th>
          </tr>
          {this.state.users.map(user => (
            <UserComponent
              key={user.id}
              id={user.id}
              name={user.name}
              age={user.age}
              userCount={user.userCount}
            />
          ))}
        </table>
        <br />
        <button onClick={this.incrementCounter} className="btn btn-secondary">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  incrementUserCounter = user => {
    this.setState({ count: this.state.count + 1 });
  };

  fetchCounter() {
    return this.state.count;
  }
}

export default Counter;
