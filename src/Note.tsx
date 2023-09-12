import * as React from 'react';

interface Note {
    id: string,
    text: string,
    date: Date
}

interface IProps {
    note: Note
}


export default function Note({note}: IProps) {
  return (
    <div>
        <h3>{note.date.toDateString()}</h3>
      <p>{note.text}</p>
    </div>
  );
}
