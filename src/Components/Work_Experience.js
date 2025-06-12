import React from 'react'
import './WorkExperience.css'

function Work(props) {
  return (
    <center>
        <div className='body'>
            <div className='lowes'>
                <div style={{height: "190px"}} className='images'>
                    <img src={props.logo} alt='' className='com' style={{height : "100px", position: "relative", left : "20px", top : "-50px"}}/>
                    <img src={props.logo1} alt='' className='sf' style={{height : "250px" ,width:"350px",position:"relative",left:"690px", top : "-30px"}}/>
                </div>
                <div>
                    <h4><center>{props.name}</center></h4>
                    <span>Profile/Client :</span>
                    <p>{props.profile}</p>
                    <span>Role :</span>
                    <p>{props.role}</p>
                    <span>Responsibilities :</span>
                    <p>{props.response}</p>
                    <span>Tech Skills :</span>
                    <p>{props.tech}</p>
                    <span>Achievements :</span>
                    <p>{props.achieve}</p>
                </div>  
            </div>
        </div>
    </center>
    
  )
}

export default Work;