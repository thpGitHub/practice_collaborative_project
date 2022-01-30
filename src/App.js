import './App.css';
import React from 'react';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';
import NadineComponent from './Components/Nadine/Nadine';
import Petunia from './Components/Petunia/petunia';
import MichelComponent from './Components/Michel/Michel';
import DelirCompo from './Components/Petunia/delirCompo';


function App() {



  return (
    <div className="App">
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
      <NadineComponent says='Yes we can'/>
      <MichelComponent says='Click me?'/>
      <Petunia/>
      <DelirCompo/>
    </div>
  );
}

export default App;
