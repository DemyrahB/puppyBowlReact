import { useState,useEffect } from "react"
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({setPlayer}) {
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players`;
    const [players, setPlayers] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
        async function getAllPlayers(){
            try{
            const response = await fetch (APIURL)
            const result = await response.json()
            console.log(result)
            setPlayers(result.data.players)
        }catch(error){
            console.log(error)
        }
        }
        getAllPlayers()
    }, [])

    
    return (
      <>
      <h1>Puppy Bowl</h1>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Breed</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {players.map((player)=>{
                return (
                    <tr>
                        <td>{player.name}</td>
                        <td>{player.breed}</td>
                        <td>{player.status}</td>
                        <td>
                            <button onClick={()=>navigate("/SinglePlayer")}>View Player</button>
                            </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
        
    
      <div>
        <NewPlayerForm/>
      </div>
      </>
      
    )
  }