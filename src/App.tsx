import { useState } from 'react'

import './App.css';
import Notes from './components/Notes';


function App() {
  interface Note {
    id: number;
    name: string;
  }
  
  const [initialData] = useState<Note[]>([
    {id: 1, name: 'Random String'},
    {id: 2, name: 'Random String'},
    {id: 3, name: 'Random String'},
    {id: 4, name: 'Random String'},
    {id: 5, name: 'Random String'},
  ])

  return (
    <>
      Welcome to Note App
      <Notes data={initialData} /> 
    </>
  )
}

export default App
