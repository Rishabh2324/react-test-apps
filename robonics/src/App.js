import { useState } from 'react';
import CardComponent from './CardComponent';

import { robots } from './robots';
import logo from './logo.svg';
import './App.css';
import SearchComponent from './SearchComponent';

function App() {
  const [robotList, setRobotList] = useState(robots);
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    let list = robotList.filter((robo) =>
      robo.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    );
    if (list.length > 0) setRobotList(list);
    else setRobotList(robots);
  };

  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <main className="App-body">
        <SearchComponent
          searchChange={onSearchChange}
          searchValue={searchValue}
        />
        {robotList.map((robot) => (
          <CardComponent
            name={robot.name}
            email={robot.email}
            key={robot.id}
            robotId={robot.id}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
