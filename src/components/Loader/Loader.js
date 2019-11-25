import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { loadJobData, removeJobData } from '../../store/actionCreators';

class Loader extends Component {    
    render () {
        return (
            <Row>
                <Col className="text-center">
                    <FilePond
                        className="mt-4"               
                        ref={filePondElement => (this.pond = filePondElement)}
                        onremovefile={this.props.onRemoveFile}
                        onaddfile={() => this.props.onLoadFile(this.pond)}/>
                    <Button 
                        disabled={!this.props.jobDataFromStore} 
                        onClick={() => this.props.history.push({pathname: '/readable'})}>See readable schema
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
        onLoadFile: (pond) => dispatch(loadJobData(pond)),
        onRemoveFile: () => dispatch(removeJobData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);