import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import JobElement from '../JobElement/JobElement'

class Job extends Component {   
    render () {
        const elements = Object.keys(this.props.data).map((key, index) => {
            
            if (typeof this.props.data[key] === 'object') {

                return Object.keys(this.props.data[key]).map((nestedKey, index) => {
                    if (typeof this.props.data[key][nestedKey] === 'object') {
                        return;
                    }

                    return (
                        <JobElement index={index} 
                            dataKey={nestedKey} 
                            dataValue={this.props.data[key][nestedKey]} />    
                    )
                })

            }

            return (
                <JobElement index={index} 
                    dataKey={key} 
                    dataValue={this.props.data[key]} />
            )
        })
    
        return (
            <Table striped bordered>
                <tbody>
                    {elements}
                </tbody>
            </Table>
        )
    }
};

export default Job;