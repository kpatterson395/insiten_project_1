import React, {useContext} from 'react';
import './App.css';
import './Controls'
import Controls from './Controls';
import SideBar from './SideBar'; 
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export interface NoteInterface {
  id: string,
  text: string,
  date: Date
}

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
            <div>
            <b>{selectedNote?.date.toDateString()}</b>
            <p> {selectedNote?.text}</p>
            <IconButton onClick={() => handleRemoveSelect()}>
              <CloseIcon />
            </IconButton>
           
          </div>
          )
        }
       
        <Controls />
      </div>
    </div>
  );
}

export default App;
