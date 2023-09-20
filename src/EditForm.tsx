import React, {useState, useContext} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NoteInterface } from './NoteReducer';
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import useSelected from './hooks/useSelected';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box'
import useFetch from './hooks/useFetch';

export default function EditForm ({setEditing, selectedNote}: any) {

    const [editingText, setEditingText] = useState<string>(selectedNote.text)
    const [jokeUsed, setJokeUsed] = useState<number>(0)
    const {selected, dispatch} = useContext(SelectContext);
    const { notesContext, dispatchNote } = useContext(NoteContext);

    const handleEditSubmit = () => {
        dispatchNote({type: "changed", id: selected, text: editingText})
        setEditing(false)
    }
    const jokes = useFetch("https://official-joke-api.appspot.com/jokes/ten")
    
    const generateJoke = () => {
      if(jokes){
        setEditingText(`${jokes[jokeUsed].setup} ... ${jokes[jokeUsed].punchline}`)
        setJokeUsed(jokeUsed+1)
      }
    }
  
    return (
      <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleEditSubmit}
      >
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="Type your note here..."
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
        />
      </div>
      <Button onClick={generateJoke}>Generate a random joke instead</Button>
      <Button variant="text" onClick={handleEditSubmit}>Update Note</Button>
    </Box>
    )
  }