import './App.css';
import ThierryComponent from './Components/Thierry/Thierry';
import TamComponent from './Components/Tam/Tam';
import NadineComponent from './Components/Nadine/Nadine';
import Petunia from './Components/Petunia/petunia';
import Legume from './Components/Petunia/legume';
import React from 'react';
import SuperCastor from './Components/Petunia/superCastor';
import Homerie from './Components/Petunia/hommerie';

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
      <Homerie/>
      <ThierryComponent says='Hello,'/>
      <TamComponent says='Salut =D'/>
      <NadineComponent says='Yes we can'/>
      <Petunia/>
      <Legume onChangeTomate={handleChoixTomate} onChangeCastor={handleCastorChange}/>
      <SuperCastor castor ={castorChoix}/>
    </div>
  );
}

export default App;
