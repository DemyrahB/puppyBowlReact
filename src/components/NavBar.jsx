import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <Link to="/AllPlayers">All Players</Link>
            <Link to="/SinglePlayer">Single Player</Link>
       </div>
    )
}
