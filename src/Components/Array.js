import React, { useState } from "react";

function Array() {
  const [arr, setArr] = useState(["apple"]);
  const [obj, setObj] = useState([{name : "Shyam", age: "23"}]);
  const addValue = () => {
    setArr((prev) => [...prev, "banana"]);
  };

  const addObj=()=>{
    setObj((obj)=>[...obj, {name : "Prashant", age: "24"}]);
  };
  return (
    <>
      <div>
        <h1>Array</h1>
        <button onClick={addValue}>Add Value</button>
        <h2>
          {arr.map((item, index) => (<p key={index}>{item}</p>))}</h2>
      </div>
      <div>
        <h1>Object</h1>
        <button onClick={addObj}>Add Obj</button>
        <h2>{obj.map((item, index)=> (<p key={index}>{item}</p>))}</h2>
      </div>
    </>
  );
}

export default Array;