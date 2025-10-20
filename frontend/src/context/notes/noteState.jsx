import NoteContext from "./noteContext";
import { useState } from "react";

const noteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async (id) => {
    const reapose = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhmMjEyOGI2ZTJmNGNjZDRhYjQwYjFlIn0sImlhdCI6MTc2MDY5NDkyM30.FE4ozRvNVggs3zql5ilh-vLoC1kRMAC8L_NBjUTpWxY",
      },
    });

    const json = await reapose.json();
    console.log(id);
    setNotes(json);
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    const duplicate = notes.find(
      (note) =>
        note.title.trim().toLowerCase() === title.trim().toLowerCase() &&
        note.description.trim().toLowerCase() === description.trim().toLowerCase()
    );

    if (duplicate) {
      alert("⚠️ Note with the same title and description already exists!");
      return;
    }

    const reapose = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhmMjEyOGI2ZTJmNGNjZDRhYjQwYjFlIn0sImlhdCI6MTc2MDY5NDkyM30.FE4ozRvNVggs3zql5ilh-vLoC1kRMAC8L_NBjUTpWxY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const newnote = await reapose.json();

    console.log("Adding a new note");
    setNotes(notes.concat(newnote));
  };

  //Delete a note
  const deleteNote = async (id) => {
    const reapose = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhmMjEyOGI2ZTJmNGNjZDRhYjQwYjFlIn0sImlhdCI6MTc2MDY5NDkyM30.FE4ozRvNVggs3zql5ilh-vLoC1kRMAC8L_NBjUTpWxY",
      }
    });

    const json = await reapose.json();
    console.log(json);

    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote =  async (id, title, description, tag) => {
    const reapose = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhmMjEyOGI2ZTJmNGNjZDRhYjQwYjFlIn0sImlhdCI6MTc2MDY5NDkyM30.FE4ozRvNVggs3zql5ilh-vLoC1kRMAC8L_NBjUTpWxY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json  = await reapose.json();
    console.log("Editing the note with id " + id);
    // Use the note returned by backend
    const newNotes = notes.map((note) =>
      note._id === id ? json.note : note
    );

    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{notes, setNotes, getNotes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default noteState;
