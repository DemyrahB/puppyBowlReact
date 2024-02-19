import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
function App() {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <Routes>
        <Route path='/AllPlayers' element={<AllPlayers/>} />
        <Route path='/SinglePlayer' element={<SinglePlayer/>}/>
      </Routes>
    </div>
    </>
  ) //players/:id
}

export default App
