import NoteContext from './noteContext'
import { useState } from 'react'

const noteState = (props) => {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default noteState
