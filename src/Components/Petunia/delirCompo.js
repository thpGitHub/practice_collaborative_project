import './delirCompo.css'
import React from 'react'
import Legume from './legume'
import SuperCastor from './superCastor'

const DelirCompo = () => {
    //const [tomateChoix, setTomateChoix] = React.useState (si tu a besoin d'utiliser tomate)
    const handleChoixTomate = (tomate) => {
        console.log(`ton chois dans APP ${tomate}`)
        //setTomateChoix(tomate)
    }
    const [castorChoix, setCastorChoix] = React.useState()
    const handleCastorChange = (castor) => {
        console.log(`tu est un castor  ${castor}`)
        setCastorChoix(castor)
    }

    return (<div className='delirCompo'>
        <Legume onChangeTomate={handleChoixTomate} onChangeCastor={handleCastorChange} />
        <SuperCastor castor={castorChoix} />

    </div>
    )
}

export default DelirCompo;