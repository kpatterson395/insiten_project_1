import React, {useContext} from 'react';
import './App.css';
import './Controls'
import Controls from './Controls';
import SideBar from './SideBar'; 
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Note from './Note';
import { NoteInterface, Author } from './NoteReducer';


function App() {
  const {selected, dispatch} = useContext(SelectContext);
  const { notesContext } = useContext(NoteContext);


  const selectedNote = notesContext.find((n: NoteInterface) => n.id === selected)

  const handleRemoveSelect = () => {
    dispatch({type: "added", id: ""})
  }

  return (
    <div className="App">
      <SideBar />
      <div>
        {
          selectedNote && (
           <Note />
          )
        }
       
        <Controls />
      </div>
    </div>
  );
}

export default App;
