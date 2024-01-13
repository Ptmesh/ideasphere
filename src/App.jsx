import { useState } from "react"
import CreateArea from "./components/CreateArea"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Note from "./components/Note"


function App() {

  const [notes,setNotes]=useState([]);

  function addNote(newNote)
  {
   setNotes(prevNotes=>{
    return [...prevNotes,newNote];
   });
  }

  function deleteNote(id)
  {
    setNotes(prevNotes =>{
      return prevNotes.filter((item,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <>
   
      <Header />
      <CreateArea
      onAdd={addNote}
      />

      {notes.map((item,index)=>{
        return <Note
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        onDelete={deleteNote}
        />
      })}
      
      <Footer />
    
    </>
  )
}

export default App
