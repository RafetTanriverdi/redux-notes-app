import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNoteAsync,changeActiveColor } from '../Redux/note/noteSlice';
import { useSelector } from 'react-redux';
import {GrCheckmark} from 'react-icons/gr'


function NoteAdd() {
    

    const [note, setNote] = useState('');
    const dispatch = useDispatch();
    const selectorColor =useSelector((state)=>state.note.activeColor)
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id =nanoid();
        const color = selectorColor
        setNote('');
        await dispatch(addNoteAsync({id,note,color}));

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='add note' value={note} onChange={(e) => setNote(e.target.value)}  />
                <button type='submit'>Add</button>

                <div className="color-selected">
                    <button type='button' className='check-btn' style={{backgroundColor:"red" }}  onClick={() => dispatch(changeActiveColor("red"))}>
                    {selectorColor==="red" ? <GrCheckmark className='check-icon'/>:''}
                    </button>
                    <button type='button' className='check-btn' style={{backgroundColor:"yellow" }} onClick={() => dispatch(changeActiveColor("yellow"))}>
                    {selectorColor==="yellow" ? <GrCheckmark className='check-icon'/>:''}
                    </button>
                    <button type='button' className='check-btn' style={{backgroundColor:"green" }} onClick={() => dispatch(changeActiveColor("green"))}>
                    {selectorColor==="green" ? <GrCheckmark className='check-icon'/>:''}
                    </button>
                    <button type='button' className='check-btn' style={{backgroundColor:"purple" }} onClick={() => dispatch(changeActiveColor("purple"))}>
                    {selectorColor==="purple" ? <GrCheckmark className='check-icon'/>:''}
                    </button>
                    <button type='button' className='check-btn' style={{backgroundColor:"blue" }} onClick={() => dispatch(changeActiveColor("blue"))}>
                    {selectorColor==="blue" ? <GrCheckmark className='check-icon'/>:''}
                    </button>
                 
                </div>
            </form>
        </div>
    )
}

export default NoteAdd