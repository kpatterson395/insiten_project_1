import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {NoteInterface} from "./App"
import AddNoteForm from './AddNoteForm';
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';

export interface IAppProps {

    addNote: (n: NoteInterface) => void
}

export default function Controls ({addNote}: IAppProps) {

  const [showAddForm, setShowAddForm] = useState(false)
  return (
    <div>  
       {showAddForm && (
        <AddNoteForm />
        )}
        <div> 
          <IconButton onClick={() => setShowAddForm(!showAddForm)}>
           {showAddForm ? <RemoveIcon /> : <AddIcon /> } 
          </IconButton>
        </div>
    

    </div>
  );
}
