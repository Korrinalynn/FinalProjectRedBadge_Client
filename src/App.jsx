import React, { Component } from "react";
import Auth from "./Auth/Auth";
import QuestionIndex from './Questions/QuestionIndex';
import SiteBar from "./Home/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// const baseURL = 'https://xivapi.com/character/[lodestone_id]?private_key=';
// const key = '61af865db4ed475180a13f491cc65edacb559d9a8a5d45018840c23c4e90187c';
// const url = `${baseURL}${key}`;

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

  // componentDidMount(){
  //   //api call
  //   fetch(url).then(response => response.json)
  //   .then(response => console.log(response))
  // }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setToken = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  };

  logout() {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  protectedViews = () => {
    return (this.state.sessionToken === localStorage.getItem("token") ? 
    <div>
          <Route path="/" exact>
            <QuestionIndex />
          </Route>


    </div>
      :
          <Auth setToken={this.setToken}/>
    )
  };
  
  render() {
    return (
      <Router>
        <div>
          <SiteBar logout={this.logout.bind(this)} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
//if you're changing the state at all it's a class component. If you're just passing the state it's a functional component.
//session token is going to go here
//updateToken will also go here.
//Look at the workoutLog. //Gonna have to convert functional components to class components.
