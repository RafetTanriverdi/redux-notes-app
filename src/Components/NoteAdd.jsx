import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNoteAsync } from '../Redux/note/noteSlice';


function NoteAdd() {
    const [note, setnote] = useState("");
    const dispatch = useDispatch()

  
    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(addNoteAsync({ note }))
        setnote("");
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add note' value={note} onChange={(e) => setnote(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default NoteAdd