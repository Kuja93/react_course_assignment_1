import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.onInputChange}
                value={props.currentName}
                className={"userInput"}
            />
        </div>
    )
}

export default UserInput;