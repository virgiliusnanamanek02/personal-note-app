import React from 'react'
import {getInitialData} from './utils';
import NotesList from './components/NotesList';
import NotesInput from './components/NotesInput';
import SearchNote from './components/SearchNote';
import './styles/style.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        querySearch: '',
        notes: getInitialData(),
    }
  }

    searchTypingHandler = (e) => {
        this.setState(prevState =>{
            return {
                ...prevState,
                querySearch: e.target.value,
        }});
    }

    addNoteHandler = ({body, title}) => {
        this.setState(prevState => {
            return {
                ...prevState,
                notes: [...prevState.notes, {
                    id: +new Date(),
                    title,
                    body,
                    archived: false,
                    createdAt: new Date().toISOString(),
                },
                ],
            }
        });
    }

    deleteNoteHandler = (id) => {
        this.setState(prevState => {
            return {
                ...prevState,
                notes: prevState.notes.filter(note => note.id !== id),
            }
        })
    }

    archiveNoteHandler = (id) => {
        const {notes} = this.state;
        notes.forEach(note => {
            if (note.id === id) {
                note.archived = !note.archived;
            }
        })
        this.setState(prevState => {
            return {
                ...prevState,
                notes: notes,
        }});
    }

    noteList() {
        const { querySearch, notes } = this.state;
    
        const list = querySearch.trim().length
          ? notes.filter((note) =>
              note.title.toLowerCase().includes(querySearch.toLowerCase())
            )
          : notes;
    
        return list.sort((a, b) => a.date - b.date).reverse();
      }

  render() {
    return (
        <div className="note-app">
        <div className="note-app__header">
        <h1>Notes</h1>
        <SearchNote onTyping={this.searchTypingHandler} />
        </div>

        <div className="note-app__body">
        <h2>Make Notes</h2>
        <NotesInput makeNotes={this.addNoteHandler} />
        </div>

        <h2 className="notes-title">Notes</h2>
        <NotesList
          list={this.noteList().filter((note) => !note.archived)}
          noteDelete={this.deleteNoteHandler}
          noteArchive={this.archiveNoteHandler}
        />

        <h2 className="archive-title">Archive</h2>
        <NotesList
          list={this.noteList().filter((note) => note.archived)}
          noteDelete={this.deleteNoteHandler}
          noteArchive={this.archiveNoteHandler}
        />
      </div>
    );
  }

}

export default App;
