import React, { Component } from "react";
import Auth from "./Auth/Auth";
import {AuthContext} from './Auth/AuthContext';
import QuestionIndex from './Questions/QuestionIndex';
import SiteBar from "./Home/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ sessionToken: token });
    }
    this.state = {
      sessionToken: '',
      setToken: this.setToken
    }
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout = () => {
    this.setState({ sessionToken: "" });
    localStorage.clear();
  };

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <Switch>
          <Route path="/" exact>
            <QuestionIndex />
          </Route>
        </Switch>
      );
    } else {
      return (
        <Route path="/auth">
          <Auth />
        </Route>
      );
    }
  };
  
  render() {
    return (
      <Router>
        <AuthContext.Provider value={this.state}>
        <div>
          <SiteBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
        </AuthContext.Provider>
      </Router>
    );
  }
}

export default App;
//if you're changing the state at all it's a class component. If you're just passing the state it's a functional component.
//session token is going to go here
//updateToken will also go here.
//Look at the workoutLog. //Gonna have to convert functional components to class components.
