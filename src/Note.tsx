import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NoteInterface } from './NoteReducer';
import { SelectContext } from './SelectContext';
import { NoteContext } from './NoteContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function Note() {

    const {selected, dispatch} = React.useContext(SelectContext);
    const { notesContext, dispatchNote } = React.useContext(NoteContext);
    const selectedNote = notesContext.find((n: NoteInterface) => n.id === selected)

    const handleRemoveSelect = () => {
      dispatch({type: "added", id: ""})
    }

    const handleDeleteNote = () => {
      dispatchNote({type: "deleted", id: selected})
    }

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
          <Button variant="outlined" startIcon={<CloseIcon />} onClick={() => handleRemoveSelect()}>
                Clear Selection
          </Button>
          <IconButton onClick={() => handleDeleteNote()}>
            <DeleteIcon />
          </IconButton>
      </CardActions>
    </Card>
  );
}