import './App.css';
import FileRendering from './Components/FileRendering';
import data from './utils/data.json'

function App() {
  return (
    <div className="App">
    {data.map((item)=>(
    <FileRendering 
    key={item.id} 
    item={item}
  /> 
  ))}
      
    </div>
  );
}

export default App;


