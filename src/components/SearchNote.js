import React from 'react';

const SearchNote = ({onTyping}) => {
    return (
        <div className='note__search-wrapper'>
            <input 
            className='note__search-input' 
            type='text' 
            onChange={onTyping}
            placeholder='Search...' 
            />
        </div>
    );
}

export default SearchNote;
