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

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default noteState;
