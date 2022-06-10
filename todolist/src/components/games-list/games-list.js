import GamesListItem from "../games-list-item/games-list-item";

import './games-list.css';

const GamesList = () => {
    return (
        <ul className="app-list list-group">
            <GamesListItem/>
            <GamesListItem/>
            <GamesListItem/>
        </ul>
    )
}

export default GamesList;