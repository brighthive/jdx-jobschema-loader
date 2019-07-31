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

	onPondChangeHandler = () => {
		const file = this.pond.getFile().file;
		const fileReader = new FileReader();

		// Assign a handler for the load event, i.e. a function that executes when the FileReader reads a file
		// https://developer.mozilla.org/en-US/docs/Web/API/FileReader#Event_handlers
		fileReader.onloadend = () => {
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
                        onaddfile={() => this.props.onLoadFile(this.pond)}/>
                    <Button 
                        disabled={!this.props.jobDataFromStore} 
                        onClick={() => this.props.history.push({pathname: '/readable'})}>See Readable
                    </Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobDataFromStore: state.jobData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadFile: (pond) => dispatch(convertJobSchema(pond))
        // onConvertJobSchema: (uploadedFileData) => dispatch(convertJobSchema(uploadedFileData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);