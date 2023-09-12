import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import {NoteInterface} from "./App"

export interface IAppProps {

    addNote: (n: NoteInterface) => void
}

export default function Controls ({addNote}: IAppProps) {
  return (
    <div>
      <IconButton>
        <AddIcon />
      </IconButton>
    
    </div>
  );
}
