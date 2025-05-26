// import React, {useState} from 'react';

// function Password()
// {
//     const[img, setImg] = useState(false);
//     const[ck, setCk] = useState(false);
//     const[text, setText] = useState(" ");
//     const[color, setColor] = useState("");
//     const[up, setUp] = useState("");
//     const[low, setLow] = useState("");
//     const[num, setNum] = useState("");
//     const[spe, setSpe] = useState("");
//     // const open=()=>
//     // {
//     //     setImg(!img)
//     // };
//     const check=(e)=>
//     {
//       setText(text)
//       setColor((e.target.value.length>=8) ? "red" : "black");
//       setUp(/[A-Z]/.test(e.target.value) ? "red" : "black");
//       setLow(/[a-z]/.test(e.target.value) ? "red" : "black");
//       setNum(/[0-9]/.test(e.target.value) ? "red" : "black");
//       setSpe(/[!@#$%^&]/.test(e.target.value) ? "red" : "black");
//     }
//     const nike=()=>
//     {
//       if(nike.checked===true)
//       {
//         setCk(ck ? 'password' : 'text')
//       }
//     }
//   return (
//     <div>
//       <br></br>
//       Password : <input type={img ? 'password' : 'text'} onKeyUp={check}/>
//       <span> </span>
//       <input type='checkbox' onClick={nike}/>  
//         <br></br><br></br>
//         <span style={{color : color}}>8 characters</span><br></br>
//         <span style={{color : up}}>1 Uppercase</span><br></br>
//         <span style={{color : low}}>1 Lowercase</span><br></br>
//         <span style={{color : num}}>1 Numeric</span><br></br>
//         <span style={{color : spe}}>1 Special</span><br></br>

//         {/* <img src={img ? 'close-eye.png' : 'open-eye.png'} alt='' onClick={open} style={{height : "45px"}}/>  */}
//     </div>
//   )
// }

// export default Password;