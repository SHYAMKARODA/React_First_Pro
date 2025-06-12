// import React, { useEffect, useState } from "react";

// function Api() {
//   const [users, setUsers] = useState([]);

//   const mk = (index) => {
//     setUsers(prevUsers => 
//       prevUsers.map((user, i) => 
//         i === index ? { ...user, visible: !user.visible } : user
//       )
//     );
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((sk) => sk.json())
//       .then((data) => {
//         const updatedData = data.map(user => ({
//           ...user,
//           visible: false
//         }));
//         setUsers(updatedData);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <ul>
//         {users.map((user, index) => (
//           <li key={user.id}>
//             <p onClick={() => mk(index)} style={{ cursor: "pointer", fontWeight: "bold" }}>
//               {user.name}
//             </p>
//             {user.visible && <p>{user.email}</p>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Api;