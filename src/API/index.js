const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-B/players`;

const getAllPlayers = async ()=> {
    try{
        const response = await fetch (APIURL);
        const result = response.json();
        console.log(result.data.players)
    }catch(error){
        console.log(error)
    }
}