import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NoteInterface } from './App';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IAppProps {

  handleSubmitNewNote: (n: NoteInterface) => void
}


export default function AddNoteForm({handleSubmitNewNote}: IAppProps) {

  const [ text, setText ] = useState('')

  const handleSubmit = () => {
    handleSubmitNewNote({text, date: new Date(), id: uuidv4()})
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="Type your note here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <Button variant="text" onClick={handleSubmit}>Add new note</Button>
    </Box>
  );
}
