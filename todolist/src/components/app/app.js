import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import GamesList from '../games-list/games-list';
import GameAddForm from '../games-add-form/games-add-form';

import './app.css';

function App() {

  const data = [
    {title: "God of War", rate:9, increase: true, id: 1},
    {title: "Uncharted 4", rate: 10, increase: true, id: 2},
    {title: "UFC 4", rate: 8, increase: false, id: 3},
    {title: "Soulcalibur 6", rate:6, increase: false, id: 4}
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <GamesList data = {data}/>
        <GameAddForm/>
    </div>
  );
}

export default App;
