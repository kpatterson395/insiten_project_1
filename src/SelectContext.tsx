import { createContext,useReducer } from 'react';
import { selectReducer } from './SelectReducer';

const defaultVal: any = "1"


export const SelectContext = createContext(defaultVal);

export const SelectContextProvider = (props: any) => {
    const [selected, dispatch] = useReducer(selectReducer, defaultVal); 
    

    return (
      <SelectContext.Provider value={{selected, dispatch}}>
        {props.children}
      </SelectContext.Provider>
    );
  };
  