import React from 'react';

const JobElement = (props) => {
    return (
        <tr key={props.index}>
            <td>{props.dataKey}</td>
            <td>{props.dataValue}</td>
        </tr>
    )
}

export default JobElement;