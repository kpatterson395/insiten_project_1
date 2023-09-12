import React from 'react';
import './App.css';
import './Controls'
import Controls from './Controls';
import { useState } from 'react'
import Note from './Note';
 
export interface NoteInterface {
  id: string,
  text: string,
  date: Date
}

function App() {
  const [ notes, setNotes] = useState([{text: 'test1230', date: new Date(), id: '1'}])

  const addNote = (n: NoteInterface) => {
    setNotes([...notes, n])
  }

  return (
    <div className="App">
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note}/>
        ))}
        <Controls addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
