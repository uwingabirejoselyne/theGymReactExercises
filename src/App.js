import './App.css';
import Count from './Component/Count';
import React from 'react'


function App() {
  const[count,setCount] = React.useState(0);
  const createCount = () =>{
    setCount(count+1)
  }
  
  return (
    <div className="App">
     <Count count={count} onClick={createCount}/>
    </div>
  );
}

export default App;
