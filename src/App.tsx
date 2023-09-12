import React, {useContext} from 'react';
import './App.css';
import './Controls'
import Controls from './Controls';
import SideBar from './SideBar'; 


export interface NoteInterface {
  id: string,
  text: string,
  date: Date
}

function App() {

  return (
    <div className="App">
      <SideBar />
      <div>
        <Controls />
      </div>
    </div>
  );
}

export default App;
