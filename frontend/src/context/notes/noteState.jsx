import NoteContext from "./noteContext";
import { useState } from "react";

const noteState = (props) => {
  const notesInitial = [
    {
      _id: "6828b03d732be7d35286025c",
      user: "682624c4a8cc02362c0ab465",
      title: "My title",
      description: "hello",
      tag: "personal",
      createdAt: "2025-05-17T15:50:21.705Z",
      __v: 0,
    },
    {
      _id: "6828b151732be7d35286025f",
      user: "682624c4a8cc02362c0ab465",
      title: "My title",
      description: "hello",
      tag: "personal",
      createdAt: "2025-05-17T15:54:57.768Z",
      __v: 0,
    },
    {
      _id: "6828b152732be7d352860261",
      user: "682624c4a8cc02362c0ab465",
      title: "My title",
      description: "hello",
      tag: "personal",
      createdAt: "2025-05-17T15:54:58.405Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a note
  const addNote = (title, description, tag) => {
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
  const deleteNote = (id) => {
    console.log("Deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a note
  const editNote = (id, title, description, tag) => {

  };

  return (
    <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default noteState;
