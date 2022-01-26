import './App.css';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';
import NadineComponent from './Components/Nadine/Nadine';
import Petunia from './Components/Petunia/petunia';

function App() {
  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
      <NadineComponent says='Yes we can'/>
      <Petunia/>
    </div>
  );
}

export default App;
