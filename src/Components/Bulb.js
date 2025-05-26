import React, { useState } from 'react'

function Bulb() {
    const [chalu, setChalu] = useState('Bulb_off.png')
    const aa =()=>{
      setChalu('Bulb_on.png')
    }
    const ja =()=>{
      setChalu('Bulb_off.png')
    }
  return (
    <div>
        <br></br>
        <img  src={chalu} alt='band'/>
        <button onClick={aa}>ON</button><span> </span>
        <button onClick={ja}>OFF</button>
    </div>
  )
}

export default Bulb;