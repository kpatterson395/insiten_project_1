
interface actionSelected {
    id: string,
    type: string
}


export const selectReducer = (selected: string, action: any) => {
    switch (action.type) {
        case 'added': {
          return action.id
        }
      
        default: {
          throw Error('Unknown action: ' + action.type);
        }
      }
  }