import React, { useState } from 'react'

function Btn_Calci() {
    const [result, setResult] = useState([" "])
    const sk=()=>{
        
    }
  return (
    <div>
      <br></br>
      Result : <input type='text'/><br></br><br></br>
      <input type='button' onClick={sk} value={this.value}/>
      {/* <input type='button' onClick={sk}/> */}
    </div>
  )
}

export default Btn_Calci;