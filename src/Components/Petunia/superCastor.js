import React from "react";
import './superCastor.css'
import Handy from './Handy_m.webp'
import Toothy from './Toothy_m.webp'

const SuperCastor = ({castor = ''}) =>{
const a = "a"
const andy = <img src={Handy} alt="oups Andy est en convalescence" width="150"/>
const toothy = <img src={Toothy} alt="oups Toothy est en convalescence" width="150"/>
//console.log(castor.includes(a))

    return(<div className="superCastor">
        {
            castor.includes(a) ? andy : toothy
        }
    </div>
    )
}

export default SuperCastor;