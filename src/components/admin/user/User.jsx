import React, { Component } from "react";

class User extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    age: this.props.age,
    userCount: this.props.userCount,
    nameEditFlag: false
  };
  render() {
    // console.log(this.props);
    // console.log("main render", this.state.userCount);
    // this.state.id = this._reactInternalFiber.key;
    // this.state.name = this.props.name;
    // this.state.age = this.props.age;
    // this.state.userCount = this.props.userCount;

    return (
      <React.Fragment>
        {/* <button
          onClick={this.incrementUserCounter}
          className="btn btn-secondary"
        >
          Increment User Count
        </button> */}

        <tr className={this.getRowClasses()}>
          <td>{this.state.id}</td>
          <td>{this.getNameFieldType()}</td>
          <td>{this.state.age}</td>
          <td>{this.state.userCount}</td>
          <td>
            <button
              onClick={this.incrementUserCounter}
              className="btn btn-secondary"
            >
              Increment User Count
            </button>
            <button
              onClick={this.changeNameEditFlag}
              className="btn btn-secondary"
            >
              Edit Name
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }

  incrementUserCounter = user => {
    // console.log(user);
    // console.log(this.state.userCount);
    this.setState({ userCount: this.state.userCount + 1 });
    // console.log(this.state.userCount);
  };

  changeNameEditFlag = user => {
    // console.log(user);
    // console.log(this.state.userCount);
    this.setState({ nameEditFlag: this.state.nameEditFlag ? false : true });
    // console.log(this.state.userCount);
  };

  getRowClasses() {
    let classes = "table-";
    classes += this.state.userCount === 0 ? "secondary" : "success";
    return classes;
  }

  getNameFieldType() {
    return this.state.nameEditFlag ? (
      <input type="text" value={this.state.name} />
    ) : (
      <h4>{this.state.name}</h4>
    );
  }
}

export default User;
