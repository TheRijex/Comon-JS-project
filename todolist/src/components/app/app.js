import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import GamesListItem from '../games-list/games-list';
import GameAddForm from '../games-add-form/games-add-form';

import './app.css';

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <GamesListItem/>
        <GameAddForm/>
    </div>
  );
}

export default App;
