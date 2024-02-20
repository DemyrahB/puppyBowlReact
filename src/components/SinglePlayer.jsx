import { useState, useEffect } from "react"
import AllPlayers from "./AllPlayers"
import App from "../App"

export default function SinglePlayer({selectedPuppy, setSelectedPuppy}) {
    const [player, setPlayer] = useState("")
    useEffect(()=>{
        async function singlePlayer(){
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${id}`);
                    const result = await response.json();
                    console.log(result);
                    return result
              } catch (err) {
                console.error(`Oh no, trouble fetching player #${id}!`, err);
              }
            };  
        singlePlayer()
        },
    [])
    return (
      <>
        <h1>Single Player View</h1>
        <table>
            <thead>
                <tr onClick={()=>{
                    setSelectedPuppy(player.id)
                }}>
                    <th>Puppy Player</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{player.name}</td>
                    <td>{player.breed}</td>
                    <td>{player.status}</td>
                </tr>
            </tbody>
        </table>
      </>
    )
  }