import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchComponent from './SearchComponent';
import CardComponent from './CardComponent';

import { robots } from './robots';
import logo from './logo.svg';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
    setCurrent(
      current.filter((robo) =>
        robo.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const [count, setCount] = useState({
    prev: 0,
    next: 12,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(robots.slice(count.prev, count.next));
  const getMoreData = () => {
    if (current.length === robots.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(robots.slice(count.prev + 12, count.next + 12))
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + 12,
      next: prevState.next + 12,
    }));
  };

  return (
    <div className="App">
      <SearchComponent
        searchChange={onSearchChange}
        searchValue={searchValue}
      />
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h1 className="LoadingComponent">Loading Robots...</h1>}
      >
        <main className="App-body">
          {current.map((robot) => (
            <CardComponent
              name={robot.name}
              email={robot.email}
              key={robot.id}
              robotId={robot.id}
            />
          ))}
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
        </main>
      </InfiniteScroll>
    </div>
  );
}

export default App;
