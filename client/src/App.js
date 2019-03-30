import React, { Component } from "react";
import Header from "./components/layout/Header";
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Welcome from "./components/Welcome";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Features from "./components/Features";
 
class App extends Component {
	render() {
		return (
			<div className="App container">
				<Header />
                <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/features" component={Features}/>
                </Switch>
			</div>
		);
	}
}

export default App;
