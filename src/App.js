import React, { Component } from 'react';
import './App.css';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Job from './components/Job/Job';


class App extends Component {
	state = {
		uploadedFileData: null,
		organization: null,
		jobPosting: null
	}

	onPondChangeHandler = (event) => {
		let file = this.pond.getFile().file;
		let fileReader = new FileReader();

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

		const organization = uploadedFileData['@graph'][0]
		const jobPosting = uploadedFileData['@graph'][1]

		this.setState({
			organization: organization,
			jobPosting: jobPosting
		})
	}

	render() {
		let jobTables;
		if (this.state.organization && this.state.jobPosting) {
			jobTables = (
				<React.Fragment>
					<h2 className="mt-4">Organization</h2>
					<Job data={this.state.organization}/>

					<h2 className="mt-4">Job posting</h2>
					<Job data={this.state.jobPosting}/>
				</React.Fragment>
			)
		}
		return (
			<Container className="App">

				<FilePond
					className="mt-4"               
					ref={filePondElement => (this.pond = filePondElement)}
					onaddfile={() => this.onPondChangeHandler()}/>

				<Button disabled={!this.state.uploadedFileData} onClick={this.convertJobSchema}>Convert to Human Readable</Button>

				<Row>
					<Col>
						{jobTables}
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;

// JobPost component
// JobPostElement component