
import { useEffect, useRef, useState } from 'react'
import './Michel.css'
import VanillaTilt from 'vanilla-tilt'

const Michel = ({ says }) => {
  const [style, setStyle] = useState('michelComponent')
  const [text, setText] = useState('')
  const tiltRef = useRef()

  const changeStyle = () => {
    setStyle('michelComponent angryRed')
    setText('Plus jamais ça!!!')
  }

  useEffect(() => {
    const tiltNode = tiltRef.current
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 800,
      glare: false,
      max_glare: 0.5,
    })
  }, [])

  return (
    <div ref={tiltRef} className={style} onClick={changeStyle}>
      {text || says}
    </div>
  )
}

export default Michel