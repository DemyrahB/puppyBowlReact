import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from './components/NewPlayerForm'
import { useState } from 'react'
function App() {
  const [selectedPuppy, setSelectedPuppy] = useState(null);
  return (
    <>
    <div>
      <NavBar />
    </div>
    {selectedPuppy ? (<SinglePlayer selectedPuppy={selectedPuppy}/>)
    : <AllPlayers setSelectedPuppy={setSelectedPuppy}/>}
    <div>
      <Routes>
        <Route path='/AllPlayers' element={<AllPlayers/>} />
        <Route path='/SinglePlayer' element={<SinglePlayer/>}/>
      </Routes>
    </div>
    <div>
      <NewPlayerForm/>
    </div>
    </>
  ) //players/:id
}

export default App
