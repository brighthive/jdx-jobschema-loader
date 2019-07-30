import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JobElement from '../JobElement/JobElement'

class Job extends Component {
    render () {
        const organization = 0;
        const posting = 1;
        const graph = this.props.data;
              
        // TODO: Figure out how to render this.
        // const benefitsList = graph[posting]['schema:jobBenefits'];
        // const benefits = benefitsList.map(benefit => {
        //     return <p>{benefit}</p>
        // });

        // TODO: Add competencies
        // _jsp_competencies = graph[POSTING]["jdx:competency"]
        // competencies = [item['schema:description']['en-US'].strip('\n').replace('\n', ' ').replace('\t', ' ').strip() for item in _jsp_competencies]

        const humanReadable = {
            "Job title": graph[posting]['schema:title']['en-US'],
            "Employer name": graph[organization]['schema:legalName']['en-US'],
            "Employer email": graph[organization]['email'],
            "Employer address": graph[organization]['schema:address']['streetAddress'],
            "Employer website": graph[organization]['url'],
            "Employer phone": graph[organization]['telephone'],
            "Employer overview": graph[organization]['jdx:employerOverview']['en-US'],
            "Job summary": graph[posting]['schema:description']['en-US'],
            "Primary economic activity": graph[posting]['schema:industry']['en-US'],
            "Industry code": graph[organization]['jdx:industryCode']['termCode'],
            "Occupation code": graph[organization]['schema:occupationalCategory']['termCode'],
            "Assessment": graph[posting]['jdx:requiredAssessment']["description"],
            "Employment agreement": graph[posting]['jdx:jobAgreement']['name'],
            "Job term": graph[posting]['jdx:jobTerm']['name'],
            "Work hours": graph[posting]['jdx:workHours']['name'],
            "Job schedule": graph[posting]['jdx:jobSchedule']['name'],
            "Credentials": graph[posting]['jdx:requiredCredential']['description']['en-US'],
            // Not available in latest Job Schema
            // "citizenship_requirement": graph[posting]['jdx:citizenshipRequirement']['name']['en-US'],
            "Physical requirement": graph[posting]['jdx:physicalRequirement']['en-US'],
            "Sensory requirement": graph[posting]['jdx:sensoryRequirement']['en-US'],
            "Security clearance requirement": graph[posting]['jdx:securityClearanceRequirement']['en-US'],
            "Special commitment": graph[posting]['jdx:specialCommitment']['en-US'],
            "Minimum": graph[posting]['schema:baseSalary']['schema:minValue'],
            "Maximum": graph[posting]['schema:baseSalary']['schema:maxValue'],
            "Frequency": graph[posting]['schema:baseSalary']['payCycleInterval']['name']['en-US'],
            "Incentive compensation": graph[posting]['schema:incentiveCompensation']['en-US'],
            "Benefits": "",
            "Application location requirement": graph[posting]['jdx:applicantLocationRequirement']["name"],
            "Date posted": graph[posting]['schema:datePosted'],
            "Valid through": graph[posting]['schema:validThrough'],
            "Job openings": graph[posting]['totalJobOpenings']
        }

        const elements = Object.keys(humanReadable).map((key, index) => {
            return (
                <JobElement index={index} 
                    dataKey={key} 
                    dataValue={humanReadable[key]} />
            )
        })
        
        return (
            <Row>
                <Col>
                    {elements}
                </Col>
            </Row>
        )
    }
};

export default Job;