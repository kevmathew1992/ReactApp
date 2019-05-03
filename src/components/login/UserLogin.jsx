import React, { Component } from "react";
import MainLoginComponent from "./MainLoginComponent";

class UserLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <MainLoginComponent userType="2" onLoginFunction={this.onUserLogin} />
          <br />
        </div>
      </React.Fragment>
    );
  }

  onUserLogin = () => {
    console.log("User login submission");
  };
}

export default UserLogin;
