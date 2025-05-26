import React,{ useState } from 'react'

function Profile() {
    const[name, setName] = useState("")
    const[age, setAge] = useState("")
    const[email, setEmail] = useState("")
  return (
    <div>
        Name : <input type='text' onKeyUp={(e)=>setName(e.target.value)}/>
        <p>My name is {name}</p>
        Age : <input type='text' onKeyUp={(e)=>setAge(e.target.value)}/>
        <p>My age is {age}</p>
        Email : <input type='text' onKeyUp={(e)=>setEmail(e.target.value)}/>
        <p>My email is {email}</p>
    </div>
  )
}

function Profile1()
{
    const[name, setName] = useState("")
    const[age, setAge] = useState("")
    const[email, setEmail] = useState("")
    const [submit, setSubmit] = useState("");

    const bio=(e)=>{
        e.preventDefault()
        setSubmit(
            <>
                 My name is {name} <br/>
                 My age is {age} <br/>
                 My email is {email}
            </>      
        )
    }
    return(
        <div>
            <form onSubmit={bio}>
            Name : <input type='text' id="naam" onChange={(e)=>setName(e.target.value)}/><br></br>
            Age : <input type='text' id="aayu" onChange={(e)=>setAge(e.target.value)}/><br></br>
            Email : <input type='text' id="mail" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <button type='submit' className='text-primary bg-warning'>Submit</button>
            <p>{submit}</p>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"></script>
        </div>
    )
}

export {Profile,Profile1};