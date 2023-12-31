import { createContext,useReducer } from 'react';
import { noteReducer } from './NoteReducer';
import { NoteInterface, Author } from './NoteReducer';




const defaultNotes: any = [{text: 'test1230', date: new Date(), id: '1', author: Author.me}]


export const NoteContext = createContext(defaultNotes);

export const NoteContextProvider = (props: any) => {
    const [notesContext, dispatchNote] = useReducer(noteReducer, defaultNotes); 


    return (
      <NoteContext.Provider value={{ notesContext, dispatchNote }}>
        {props.children}
      </NoteContext.Provider>
    );
  };
  