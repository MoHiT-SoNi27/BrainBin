import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes, addNote} = context;
  return (
    <>
      <AddNote />
      <div className="row">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return <NoteItems key={note._id} note={note} setNotes={setNotes} />
          })}
      </div>
    </>
  )
}

export default Notes
