import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {NoteInterface} from "./NoteReducer"
import AddNoteForm from './AddNoteForm';
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';


export default function Controls () {

  const [showAddForm, setShowAddForm] = useState(false)


  const handleSubmitNewNote = () => {
    setShowAddForm(false)
  }

  return (
    <div>  
       {showAddForm && (
        <AddNoteForm handleSubmitNewNote={handleSubmitNewNote}/>
        )}
        <div> 
          <IconButton onClick={() => setShowAddForm(!showAddForm)}>
           {showAddForm ? <RemoveIcon /> : <AddIcon /> } 
          </IconButton>
        </div>
    

    </div>
  );
}
