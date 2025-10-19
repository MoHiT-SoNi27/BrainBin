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
    const reapose = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhmMjEyOGI2ZTJmNGNjZDRhYjQwYjFlIn0sImlhdCI6MTc2MDY5NDkyM30.FE4ozRvNVggs3zql5ilh-vLoC1kRMAC8L_NBjUTpWxY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await reapose.json();

    console.log("Adding a new note");
    const note = {
      _id: "6828b152732be7d352860261",
      user: "682624c4a8cc02362c0ab465d",
      title: title,
      description: description,
      tag: tag,
      createdAt: "2025-05-17T15:54:58.405Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
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

    const json = await reapose.json();
    
    for (let index = 0; index < notes.length; index++) {
      const element = array[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(notes);
  };

  return (
    <NoteContext.Provider value={{notes, setNotes, getNotes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default noteState;
