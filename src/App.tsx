import React, {useContext} from 'react';
import './App.css';
import './Controls'
import Controls from './Controls';
import SideBar from './SideBar'; 
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';

export interface NoteInterface {
  id: string,
  text: string,
  date: Date
}

function App() {
  const {selected} = useContext(SelectContext);
  const { notesContext } = useContext(NoteContext);

  const selectedNote = notesContext.find((n: NoteInterface) => n.id === selected)

  return (
    <div className="App">
      <SideBar />
      <div>
        <b>{selectedNote?.date.toDateString()}</b>
       <p> {selectedNote?.text}</p>
        <Controls />
      </div>
    </div>
  );
}

export default App;
