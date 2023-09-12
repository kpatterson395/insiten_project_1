import * as React from 'react';
import { NoteInterface } from './App';


interface IProps {
    note: NoteInterface
}


export default function Note({note}: IProps) {
  return (
    <div>
        <h3>{note.date.toDateString()}</h3>
      <p>{note.text}</p>
    </div>
  );
}
