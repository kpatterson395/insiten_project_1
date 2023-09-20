import React, {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NoteInterface } from './NoteReducer';
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import useSelected from './hooks/useSelected';
import EditIcon from '@mui/icons-material/Edit';
import EditForm from './EditForm';

export default function Note() {
    const [editing, setEditing] = useState<boolean>(false)
    const [editingText, setEditingText] = useState<string>("")
    const {selected, dispatch} = useContext(SelectContext);
    const { notesContext, dispatchNote } = useContext(NoteContext);

    // const selectedNote = useSelected(selected, notesContext)

  const selectedNote = notesContext.find((n: NoteInterface) => n.id === selected)

    const handleDeleteNote = () => {
      dispatchNote({type: "deleted", id: selected})
      dispatch({type:"added", id: ""})
    }


    const handleEditNote = () => {
      if(selectedNote){
        setEditing(true)
      }
    }

    


    const DisplayCard: () => JSX.Element = () => {
      return (
      <Card sx={{ width: 275, marginLeft: 80, marginTop: 5 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          selected note from
        </Typography>
        <Typography variant="h5" component="div">
            {selectedNote?.date?.toDateString()}
        </Typography>
        <Typography variant="body2">
            {selectedNote?.text}
        </Typography>
        <Typography variant="body2">
            Written by: {selectedNote?.author}
        </Typography>
      </CardContent>
      <CardActions>
          
          <IconButton onClick={() => handleDeleteNote()}>
            <DeleteIcon />
          </IconButton>
          
          <IconButton onClick={() => handleEditNote()}>
            <EditIcon />
          </IconButton>
      </CardActions>
    </Card>
    )}

  return (
    editing ? <EditForm setEditing={setEditing} selectedNote={selectedNote}/>: <DisplayCard/>

  );
}