import { useState, useEffect } from "react"
import AllPlayers from "./AllPlayers"
import App from "../App"
import { useParams } from "react-router-dom"

export default function SinglePlayer() {
    let {id} = useParams();
    const [player, setPlayer] = useState("")
    useEffect(()=>{
        async function singlePlayer({id}){
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players/${id}`);
                    const result = await response.json();
                    console.log(result);
                    return result.data.player
              } catch (err) {
                console.error(`Oh no, trouble fetching player #${id}!`, err);
              }
            };  
        },
    [])
    return (
      <>

      </>
    )
  }