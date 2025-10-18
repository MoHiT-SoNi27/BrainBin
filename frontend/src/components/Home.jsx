import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notes from './Notes';

const Home = () => {
  const context = React.useContext(noteContext);
  const { notes, setNotes } = context;
  return (
    <div>
      <Notes />
    </div>
  )
}

export default Home
