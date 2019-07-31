import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { convertJobSchema } from '../../store/actionCreators';

class Loader extends Component {
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
    
    render () {
        return (
            <Row>
                <Col>
                    <FilePond
                        className="mt-4"               
                        ref={filePondElement => (this.pond = filePondElement)}
                        onaddfile={() => this.onPondChangeHandler()}/>
                    <Button 
                        disabled={!this.state.uploadedFileData} 
                        onClick={() => this.props.onConvertJobSchema(this.state.uploadedFileData)}>Convert to Human Readable
                    </Button>
                    <Button 
                        disabled={!this.state.uploadedFileData} 
                        onClick={() => this.props.history.push({pathname: '/readable'})}>See Readable
                    </Button>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConvertJobSchema: (uploadedFileData) => dispatch(convertJobSchema(uploadedFileData))
    }
}

export default connect(null, mapDispatchToProps)(Loader);