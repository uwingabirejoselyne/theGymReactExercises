import './App.css';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className=" flex flex-row justify-center items-center gap-2">
         <Buttons buttonNumber={1} />
        <Buttons buttonNumber={2} />
        <Buttons buttonNumber={3} />
    </div>
  );
}

export default App;
