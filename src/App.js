import './App.css';
import ItemLists from './Components/ItemLists';
import React from 'react';

function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse','hen'];

  return (
    <div className="App">
      <ItemLists list={animals} />
    </div>
  );
}

export default App;
