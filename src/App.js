import './App.css';
import ThierryComponent from './Components/Thierry/Thierry';
import MichelComponent from './Components/Michel/Michel';

function App() {
  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <MichelComponent says='Click me?'/>
    </div>
  );
}

export default App;
