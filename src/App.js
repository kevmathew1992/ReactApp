import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/login/AdminLogin";
import UserLogin from "./components/login/UserLogin";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/adminLogin" component={AdminLogin} />
        <Route exact path="/userLogin" component={UserLogin} />
      </Router>
    </React.Fragment>
  );
}

export default App;
