import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './App.css';
import Loader from './components/Loader/Loader';
import Job from './components/Job/Job';

class App extends Component {	
	render() {
		return (
			<div>
				<Container className="App">
					<Route path="/" exact component={Loader} />
					<Route path="/readable" exact component={Job}/>
				</Container>
			</div>
		);
	}
}

export default App;