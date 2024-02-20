import { useState,useEffect } from "react"

export default function AllPlayers() {
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players`;
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        async function getAllPlayers(){
            try{
            const response = await fetch (APIURL)
            const result = await response.json()
            setPlayers(result.data.players)
        }catch(error){
            console.log(error)
        }
        }
        getAllPlayers()
    }, [])
    
    return (
      <>
        {players.map(player=>
            <div>{player.name}</div>)}
      </>
      
    )
  }