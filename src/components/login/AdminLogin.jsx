import React, { Component } from "react";
import MainLoginComponent from "./MainLoginComponent";

class AdminLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <MainLoginComponent
            userType="1"
            onLoginFunction={this.onAdminLogin}
          />
          <br />
        </div>
      </React.Fragment>
    );
  }

  onAdminLogin = () => {
    console.log("Admin login submission");
  };
}

export default AdminLogin;
