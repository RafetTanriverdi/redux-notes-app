import React from 'react'
import NoteAdd from './NoteAdd'
import Search from './Search'

function Content() {
  return (
    <div>
        <h1>Notes App</h1>
        <Search/>
        <NoteAdd/>
        
    </div>
  )
}

export default Content