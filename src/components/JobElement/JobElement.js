import React from 'react';

const JobElement = (props) => {
    return (
        <div key={props.index}>
            <h4>{props.dataKey}</h4>
            <p>{props.dataValue}</p>
        </div>
    )
}

export default JobElement;