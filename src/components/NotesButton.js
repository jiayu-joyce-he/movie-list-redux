/** @format */

import React, { useState } from 'react'
import Welcome from './Welcome'

export default function NotesButton() {
    const [notesShown, setNotesShown] = useState(false)
    return (
        <div>
            <button onClick={() => setNotesShown(!notesShown)}>
                Show Notes
            </button>
            {notesShown && <Welcome welcome='Welcome to react' name='Joyce' />}
        </div>
    )
}
