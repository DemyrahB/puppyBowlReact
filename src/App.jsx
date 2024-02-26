import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import Home from './components/Home'
import { useState } from 'react'
function App() {
  const [selectedPuppy, setSelectedPuppy] = useState(null);
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <Routes>
        <Route path='Home' element={<Home/>}></Route>
        <Route path='/AllPlayers' element={<AllPlayers/>} />
        <Route path='/SinglePlayer' element={<SinglePlayer/>}/>
      </Routes>
    </div>
    </>
  ) //players/:id
}

export default App
