import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    getNotes();
  }, []);

  const [note, setNote] = useState({eid: "", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
    console.log("Updating the note", currentNote);
    ref.current.click()
    setNote({eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Updating the note...", note);
    editNote(note.eid, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  };

  return (
    <>
      <AddNote />

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange}></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange}></input>
                </div>
              </form></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Your Notes</h2>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItems key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
