import React from 'react';

export default function Employee(props) {
    const { details } = props
    if (!details) {
        return <h3>Scrubbing ZFS Pool for Data</h3>
    }

    return(
        <div className='employee container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}