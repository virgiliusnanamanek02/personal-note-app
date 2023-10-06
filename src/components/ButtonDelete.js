import React from 'react';

const ButtonDelete = ({onClick}) => {
    return (
        <button className="__delete-button" onClick={onClick}>
            Delete
        </button>
    );
}

export default ButtonDelete;
