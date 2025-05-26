import React from 'react'

function Shyam(props) {
  return (
    <div style={props.style}>
      <br></br>
      <center>
        <img src={props.shyam} alt='sk' style={{height : "200px"}}/><br></br><br></br>
        <div>
          <span style={{position : "relative", left : "-216px"}}><b>Name</b> : {props.name}<br></br></span>
          <span style={{position : "relative", left : "-265px"}}><b>Age</b> : {props.age}<br></br></span>
          <span style={{position : "relative", left : "-168px"}}><b>Email</b> : {props.email}<br></br></span>
          <span style={{position : "relative", left : "-244px"}}><b>Gender</b> : {props.gender}<br></br></span>
          <span style={{position : "relative", left : "-217px"}}><b>Contact</b> : {props.contact}<br></br></span>
          <span style={{position : "relative", left : "-139px"}}><b>Address</b> : {props.address}<br></br></span>
          <span style={{position : "relative", left : "-55px"}}><b>Technologies</b> : {props.tech}<br></br></span>
        </div>   
      </center>
    </div>
  )
}

export default Shyam;