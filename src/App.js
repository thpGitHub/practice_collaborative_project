import './App.css';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';
import NadineComponent from './Components/Nadine/Nadine';

function App() {
  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
      <NadineComponent says='Yes we can'/>
    </div>
  );
}

export default App;
