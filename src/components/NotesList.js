import React from 'react';
import NotesItem from './NotesItem';

const NotesList = ({list, noteArchive, noteDelete}) => {
    if (list.length) {
        return (
          <div className="notes-list">
            {list.map((item) => (
              <NotesItem
                note={item}
                key={item.id}
                noteDelete={noteDelete}
                noteArchive={noteArchive}
              />
            ))}
          </div>
        );
      }
    
      return <p className="notes-list__empty-message">You don't have a note yet</p>;
}

export default NotesList;
