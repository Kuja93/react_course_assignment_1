import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.onInputChange}
            />
        </div>
    )
}

export default UserInput;