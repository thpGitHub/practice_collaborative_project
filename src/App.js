import './App.css';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';

function App() {
  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
    </div>
  );
}

export default App;
