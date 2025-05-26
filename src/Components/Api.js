import React, { useEffect, useState } from "react";

function Api() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((sk) => sk.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <ul>
        {user.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul> */}

      <center>
        <br></br>
        <table style={{border: "2px solid black"}}>
          <thead style={{textAlign : "center", borderSpacing : "10px"}}>
            <th style={{border: "2px solid black", padding : "10px"}}>Id</th>
            <th style={{border: "2px solid black", padding : "10px"}}>Username</th>
            <th style={{border: "2px solid black", padding : "10px"}}>Name</th>
            <th>Email</th>
          </thead>
          <tbody style={{textAlign : "center", border: "2px solid black"}}>
            {user.map((e, index) => (
              <tr key={index} style={{border: "2px solid black"}}>
                <td style={{border: "2px solid black"}}>{e.id}</td>
                <td style={{border: "2px solid black"}}>{e.username}</td>
                <td style={{border: "2px solid black"}}>{e.name}</td>
                <td style={{border: "2px solid black"}}>{e.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Api;
