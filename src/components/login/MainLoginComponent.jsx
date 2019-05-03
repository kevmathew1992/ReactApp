import React, { Component } from "react";
import UserLogin from "./UserLogin";
import AdminLogin from "./AdminLogin";
import Navbar from "../layout/Navbar";

class MainLoginComponent extends Component {
  state = {
    userId: 0,
    userName: "",
    password: "",
    userType: this.props.userType
  };

  onChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };
  render() {
    console.log("render userType :: " + this.props.userType);
    console.log("render state userType :: " + this.state.userType);
    return (
      <React.Fragment>
        <Navbar />

        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">User Name</label>
            <input
              type="text"
              value={this.state.userName}
              name="userName"
              placeholder="Enter User Name"
              onChange={this.onChange}
              className="form-control"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="Enter Password"
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <input
            type="submit"
            value="Login"
            onClick={this.props.onLoginFunction}
            className="btn btn-primary"
          />
        </form>
      </React.Fragment>
    );
  }

  getUserHeader() {
    return this.state.userType === 1 ? (
      <h3>Admin Login Page</h3>
    ) : (
      <h3>User Login Page</h3>
    );
  }
}

export default MainLoginComponent;
