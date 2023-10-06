import React from 'react'

function ButtonArchive({ onClick, archived }) {
  return (
    <button className="__archive-button" onClick={onClick}>
        {archived ? 'Unarchive' : 'Archive'}
    </button>
  )
}

export default ButtonArchive