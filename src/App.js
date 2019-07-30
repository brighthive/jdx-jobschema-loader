import React, { Component } from 'react';
import './App.css';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Job from './components/Job/Job';


class App extends Component {
	state = {
		uploadedFileData: null,
		organization: null,
		jobPosting: null
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
	}

	render() {
		return (
			<Container className="App">
				<FilePond
					className="mt-4"               
					ref={filePondElement => (this.pond = filePondElement)}
					onaddfile={() => this.onPondChangeHandler()}/>
				<Button disabled={!this.state.uploadedFileData} onClick={this.convertJobSchema}>Convert to Human Readable</Button>
				{ this.state.jobData ? <Job data={this.state.jobData} /> : null }
			</Container>
		);
	}
}

export default App;

// JobPost component
// JobPostElement component