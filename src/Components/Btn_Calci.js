// import React, { useState } from 'react'

// function Btn_Calci() {
//   const[val, setVal] = useState(" ")
//   const num=(value)=>{
//     setVal(prev=>prev + value);
//   }
//   const res=()=>{
//     setVal(eval(val));
//   }
//   const cl=()=>{
//     setVal("")
//   }
//   return (
//     <center>
//       <br></br>
//       <div>
//         Calculate : <input type='text' value={val}/><br></br><br></br>
//         <button onClick={(e)=>num('9')}>9</button><span> </span>
//         <button onClick={(e)=>num('8')}>8</button><span> </span>
//         <button onClick={(e)=>num('7')}>7</button><span> </span>
//         <button onClick={(e)=>num('+')}>+</button><br></br><br></br>
//         <button onClick={(e)=>num('6')}>6</button><span> </span>
//         <button onClick={(e)=>num('5')}>5</button><span> </span>
//         <button onClick={(e)=>num('4')}>4</button><span> </span>
//         <button onClick={(e)=>num('-')}>-</button><br></br><br></br>
//         <button onClick={(e)=>num('3')}>3</button><span> </span>
//         <button onClick={(e)=>num('2')}>2</button><span> </span>
//         <button onClick={(e)=>num('1')}>1</button><span> </span>
//         <button onClick={(e)=>num('*')}>*</button><br></br><br></br>
//         <button onClick={(e)=>num('0')}>0</button><span> </span>
//         <button onClick={(e)=>num('.')}>.</button><span> </span>
//         <button onClick={(e)=>num('/')}>/</button><span> </span><br></br><br></br>
//         <button onClick={(e)=>res('=')}>=</button><span> </span>
//         <button onClick={(e)=>cl('clear')}>Clear</button>
//       </div>
//     </center>
//   )
// }

// export default Btn_Calci;