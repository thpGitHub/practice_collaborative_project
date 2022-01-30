import React from "react";
import './legume.css'

const Legume = ({onChangeTomate, onChangeCastor}) =>{
const legume = "aimez vous les legume ?" // teste 
const [tomate, setTomate] = React.useState('')
const [castor, setCastor] = React.useState('')

const handleChangeTomate= (event)=>{
    event.preventDefault()
    //console.log(tomate)
    setTomate(event.target.value)
    onChangeTomate(tomate) //remonter compo parent
}

const handleChangeCastor= (event)=>{
    event.preventDefault()
    //console.log(castor)
    setCastor(event.target.value)
    onChangeCastor(castor) //remonter compo parent
}


return(<form className="legumes">
<label>{legume} </label>  
<input type='checkbox' placeholder={legume} value='vrai' checked ={tomate === 'vrai'} onChange={handleChangeTomate}/> 
<label>OUI</label> 

<input type='checkbox' placeholder={legume} value='faux' checked ={tomate === 'faux'} onChange={handleChangeTomate}/> 
<label>NON</label><br/>

<label> Quel type de castor est tu ?</label> 
<input onChange={handleChangeCastor}/>
</form>
)
}

export default Legume;