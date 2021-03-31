import React from 'react'

function Result (props) {
  
    const result = props.result;

    if (!result) {
        return null
    }

    return (
        <li>
            {' '}
            {result.codeResult.code} [{result.codeResult.format}]{' '}
        </li>
    )
}


export default Result;