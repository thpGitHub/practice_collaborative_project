import './App.css';
import React from 'react';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';
import NadineComponent from './Components/Nadine/Nadine';
import Petunia from './Components/Petunia/petunia';
import MichelComponent from './Components/Michel/Michel';
import Legume from './Components/Petunia/legume';
import SuperCastor from './Components/Petunia/superCastor';

function App() {
  //const [tomateChoix, setTomateChoix] = React.useState (si tu a besoin d'utiliser tomate)
  const handleChoixTomate = (tomate)=>{
    console.log(`ton chois dans APP ${tomate}`)
    //setTomateChoix(tomate)
  }
  const [castorChoix, setCastorChoix] = React.useState()
  const handleCastorChange = (castor)=>{
    console.log(`tu est un castor  ${castor}`)
    setCastorChoix(castor)
  }


  return (
    <div className="App">
      
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
      <NadineComponent says='Yes we can'/>
      <MichelComponent says='Click me?'/>
      <Petunia/>
      <Legume onChangeTomate={handleChoixTomate} onChangeCastor={handleCastorChange}/>
      <SuperCastor castor ={castorChoix}/>
    </div>
  );
}

export default App;
