import { NoteInterface } from "./App";

export const noteReducer = (notesContext: NoteInterface[], action: any) => {
    switch (action.type) {
      case 'added': {
        return [...notesContext, {
          id: action.id,
          text: action.text,
          date: action.date
        }];
      }
      case 'changed': {
        return notesContext.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return notesContext.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }