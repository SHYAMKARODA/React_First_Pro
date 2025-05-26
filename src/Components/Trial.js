import React,{useState} from 'react'

function Trial() {
  const[name, setName] = useState("")
  const[msg, setMsg] = useState("")
  const result=()=>{
    setMsg(`My name is ${name}`);
  }
  return (
    <div>
      <input type='text' onKeyUp={(e)=>setName(e.target.value)}/><br></br>
      <button onClick={result}>Submit</button><br></br>
      <p>{msg}</p>
    </div>
  )
}

export default Trial;