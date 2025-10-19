import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(() => {
      getNotes();
    }, [])
  return (
    <>
      <AddNote />
      <div className="row">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return <NoteItems key={note._id} note={note} />
          })}
      </div>
    </>
  )
}

export default Notes
