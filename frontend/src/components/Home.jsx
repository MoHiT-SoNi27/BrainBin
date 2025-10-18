import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes';

const Home = () => {
  const context = React.useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <div className="container my-3">
        <h2>ADD YOUR NOTES</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button> 
        </form>
      </div>

      <Notes />
    </div>
  )
}

export default Home
