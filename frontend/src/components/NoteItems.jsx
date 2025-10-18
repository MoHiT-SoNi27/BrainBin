import React, {useContext} from 'react'

const NoteItems = (props) => {
    const { note, setNotes } = props;
  // You can use note and setNotes here to display or manipulate the note
  return (
    <div className='col-md-3'>
      {note.title && (
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between"> 
              <h5 className="card-title ">{note.title}</h5>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-trash "></i>
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
            <p className="card-text"><small className="text-muted">Tag: {note.tag}</small></p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoteItems
