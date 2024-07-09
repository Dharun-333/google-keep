import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import CreateNote from './components/CreateNote/CreateNote.jsx'
import Note from './components/Note/Note.jsx'
import Footer from './components/Footer/Footer.jsx'

export const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote)=>{
    setNotes((prevNotes)=>{
      return[...prevNotes, newNote]
    })
  }
  const deleteNote = (id) => {
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem,index)=> index !== id)
      // return index!==id
    })
  }
  return (
    <div>
      <Header />
      <CreateNote  addNote={addNote}/>
      {notes.map((note,index) => {
        return (
          <Note id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
        )
      })}
      <Footer />
      
    </div>
  )
}
export default App
