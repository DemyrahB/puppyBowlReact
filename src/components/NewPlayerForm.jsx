import { useState } from "react"

export default function NewPlayerForm({token, setToken}) {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const[error, setError] = useState(null)
        
     async function handleSubmit (event){
        event.preventDefault();
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify({name: name, breed: breed}), 
            });
            const result = await response.json();
            console.log(result)
            setToken(result.token);
        } catch (error) {
            if(error){
                setError(error)
            }
        }
        }
    return (
      <>
      <h2>New Player Form</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}} />
        <label htmlFor="breed">Breed</label>
        <input 
            type="text" 
            value={breed}
            onChange={(e)=>{setBreed(e.target.value)}}/>
        <button type="submit">Submit</button>
      </form>
      </>
    )
    }