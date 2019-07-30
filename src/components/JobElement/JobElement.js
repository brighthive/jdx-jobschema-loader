import React from 'react';

const JobElement = (props) => {
    return (
        <div key={props.index}>
            <h3>{props.dataKey}</h3>
            <p>{props.dataValue}</p>
        </div>
    )
}

export default JobElement;