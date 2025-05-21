import NoteContext from './noteContext'
import { useState } from 'react'

const noteState = (props) => {
    const s1 = {
        "name": "harry",
        "class": "5th"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "shubham",
                "class": "6th"
            });
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState
