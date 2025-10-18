import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItems key={note._id} note={note} setNotes={setNotes} />
        })}
    </div>
  )
}

export default Notes
