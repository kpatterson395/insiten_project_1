

export enum Author {
  me = "Kristie",
  other = "Guest"
}


export interface NoteInterface {
  id: string,
  text: string,
  date: Date,
  author?: Author
}

export const noteReducer = (notesContext: NoteInterface[], action: any) => {
    switch (action.type) {
      case 'added': {
        return [...notesContext, {
          id: action.id,
          text: action.text,
          date: action.date,
          author: Author.other
        }];
      }
      case 'changed': {
        return notesContext.map(t => {
          if (t.id === action.id) {
            return {
              ...t,
              text: action.text
            }
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