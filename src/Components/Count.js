import React, { useState } from 'react'

function Count() {
    const [n, setN] = useState(0)
  return (
    <div>
        <p>Value of n is {n}</p>
        <button onClick={()=>
            {
                setN(n+1);
                console.log(n)
            }
        }>Increase</button>
    </div>
  )
}

export default Count;