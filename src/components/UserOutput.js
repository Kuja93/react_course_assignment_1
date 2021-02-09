import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>username: {props.username}</p>
            <p>please enter username</p>
        </div>
    )
}

export default UserOutput;