import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './App.css';
import Job from './components/Job/Job';


class App extends Component {
	state = {
		uploadedFileData: null
	}

	onPondChangeHandler = (event) => {
		const file = this.pond.getFile().file;
		const fileReader = new FileReader();

		// Assign a handler for the load event, i.e. a function that executes when the FileReader reads a file
		// https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Event_handlers
		fileReader.onloadend = (event) => {
			const fileContent = fileReader.result;
			const contentAsObj = JSON.parse(fileContent)

			this.setState({
				uploadedFileData: contentAsObj
			})
		}

		fileReader.readAsText(file);
	}

	convertJobSchema = () => {
		const uploadedFileData = {...this.state.uploadedFileData}
		const jobData = uploadedFileData['@graph']

		this.setState({
			jobData: jobData
		})

		console.log(this.props)
		// this.props.history.push({
        //     pathname: '/readable'
        // });
	}

	render() {
		return (
			<div>
				<Container className="App">
					<FilePond
						className="mt-4"               
						ref={filePondElement => (this.pond = filePondElement)}
						onaddfile={() => this.onPondChangeHandler()}/>
					<Button 
						disabled={!this.state.uploadedFileData} 
						onClick={this.convertJobSchema}>Convert to Human Readable
					</Button>
					{/* { this.state.jobData ? <Job data={this.state.jobData} /> : null } */}
	
				</Container>
				<Route path="/"/>
				<Route 
					path="/readable" 
					render={ () => <Job data={this.state.jobData} /> }/>
			</div>
		);
	}
}

export default App;

// JobPost component
// JobPostElement component