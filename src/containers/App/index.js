import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import config from './firebase-config';

constructor() {
	super();
	firebase.initializeApp(config);
}

componentWill Mount() {
	...

	let goalsRef = firebase.database().ref('goals');
	
	let _this = this;

  	goalsRef.on('value', function(snapshot) {
		console.log(snapshot.val());

		_this.setState({
			goals: snapshot.val(),
			loading: false
		});
		});
	}
	
class App extends Component {
  render() {
    return (
      <div className="App">
	{this.props.children && React.cloneElement(this.props.children, {
		firebaseRef: firebase.database().ref('goals'),
		goals: this.state.goals,
		loading: this.state.loading
	})}
      </div>
    );
  }
}

export default App;
