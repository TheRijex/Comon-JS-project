import GamesListItem from "../games-list-item/games-list-item";

import './games-list.css';

const GamesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            //<GamesListItem title = {item.title} rate = {item.rate}/>
            <GamesListItem key={id}{...itemProps}/>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default GamesList;