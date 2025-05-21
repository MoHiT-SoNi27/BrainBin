import React, {useContext, useEffect} from "react"
import NoteContext from "../context/notes/noteContext"

const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    a.update()
  }, [])
  return (
    <div>
      <p>Loda {a.state.name} and {a.state.class} </p>
    </div>
  )
}

export default About
