import React from 'react'
import List from './List'
import NoteAdd from './NoteAdd'
import Search from './Search'

function Content() {
  return (
    <>
        <h1>Notes App</h1>
        <Search/>
        <NoteAdd/>
        <List/>
        
    </>
  )
}

export default Content