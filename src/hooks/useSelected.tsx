import React, { useEffect, useState } from 'react';
import { NoteInterface } from '../NoteReducer';
import { SelectContext } from '../SelectContext';
import { NoteContext } from '../NoteContext';

export interface IAppProps {
    id: string
}

export default function useSelected() {

    const [selectedVal, setSelectedVal] = useState<NoteInterface | null>()
    const  {selected, dispatch} = React.useContext(SelectContext);
    const { notesContext, dispatchNote } = React.useContext(NoteContext);
    useEffect(() => {
        notesContext.forEach((n: NoteInterface) => {
            if(n.id === selected){
                setSelectedVal(n)
            }
        })
    }, [selected])
    

    return selectedVal

}
