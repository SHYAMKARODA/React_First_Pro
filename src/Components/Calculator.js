// import React, {useState} from 'react'

// function Calci() {
//   const [result, setResult] = useState("")
//   const [opera, setOpera] = useState("")
//   const [pehla, setPehla] = useState("")
//   const [dusra, setDusra] = useState("")
//   const num1 = parseInt(pehla)
//   const num2 = parseInt(dusra)
//   const darkar=()=>{
//     switch (opera){
//       case '+' : var res = num1 + num2
//                   setResult(res);
//                  break;
//       case '-' : var res1 = num1 - num2
//                  setResult(res1);
//                  break;
//       case '*' : var res2 = num1 * num2
//                  setResult(res2);
//                  break;
//       case '/' : var res3 = num1 / num2
//                  setResult(res3);
//                  break;
//       default : 
//     }
//   }
//   return (
//     <div>
//       <br></br>
//       First_number : <input type='text' value={pehla} onChange={(e)=>setPehla(e.target.value)} /><br></br>
//       Second_number : <input type='text' value={dusra} onChange={(e)=>setDusra(e.target.value)}/><br></br>
//       Operator : <select onChange={(e)=>setOpera(e.target.value)} onClick={darkar}>
//                     <option>Select operator</option>
//                     <option>+</option>
//                     <option>-</option>
//                     <option>*</option>
//                     <option>/</option>
//                  </select><br></br>
//       Result : <input type='text' value={result}/>
//     </div>
//   )
// }

// export default Calci;