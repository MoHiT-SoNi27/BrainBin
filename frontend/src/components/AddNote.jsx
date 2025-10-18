import { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleSubmit = (e) => { 
        e.preventDefault();
        addNote(note.title, note.description, note.tag); 
    };

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    };

  return (
    <div>
      <div className="container my-3">
        <h2>ADD YOUR NOTES</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Title" onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" rows="3" onChange={onChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Note</button> 
        </form>
      </div>
    </div>
  )
}

export default AddNote
