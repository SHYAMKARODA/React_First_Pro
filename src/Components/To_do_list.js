import React, { useState } from 'react'

function Taskadd() {
    const[arr, setArr] = useState([]);
    const[name, setName] = useState('');
    const[num, setNum] = useState('');
    const list = ()=>{
        setArr([...arr ,{name, num}])
        setName("")
        setNum("")
    }
  return (
    <div>
        Name : <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br></br><br></br>
        Num : <input type='number' value={num} onChange={(e)=>setNum(e.target.value)}/><br></br><br></br>
        <button onClick={list}>Add Task</button><br></br><br></br>
        <table style={{border : "2px solid black"}}>
            <thead>
                <th>Name</th>
                <th>Number</th>
            </thead>
            <tbody>
                {arr.map((e,index)=>
                <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.num}</td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Taskadd;