import React from "react";
import './petunia.css'

const Petunia = () =>{

    const[ count, setCount]= React.useState(0)

    const handleCountAdd = () =>{
        setCount(count +1)
    }

    return(<div className="petuniaCompo">
        <button className="btn1" onClick={handleCountAdd}>Ajoutez un Merci</button>

        <p>Merci {count} fois, de nous permettre de tester github en groupe</p>

    </div>)

}

export default Petunia;