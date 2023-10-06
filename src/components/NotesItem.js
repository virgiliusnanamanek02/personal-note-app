import React from 'react';
import ButtonArchive from './ButtonArchive';
import ButtonDelete from './ButtonDelete';
import NotesBody from './NotesBody';

const NotesItem = ({note, noteArchive, noteDelete}) => {
    return (
        <div className="note-item">
            <NotesBody 
            title={note.title} 
            body={note.body} 
            createdAt={note.createdAt} 
            />
          <div className="note-item__action">
          <ButtonDelete onClick={()=> noteDelete(note.id)} />
          <ButtonArchive onClick={()=> noteArchive(note.id)} archived={note.archived} />
          </div>
        </div>
    );
}

export default NotesItem;
