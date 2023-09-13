import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NoteInterface } from './NoteReducer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NoteContext} from './NoteContext'

export interface IAppProps {

  handleSubmitNewNote: () => void
}


export default function AddNoteForm({handleSubmitNewNote}: IAppProps) {

  const [ text, setText ] = useState('')
  const { notesContext, dispatchNote } = React.useContext(NoteContext);

  const handleSubmit = () => {
    dispatchNote({type: 'added', text, date: new Date(), id: uuidv4()})
    handleSubmitNewNote()
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
