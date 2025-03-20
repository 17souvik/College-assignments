// import React, { useEffect, useState } from "react";

// function App() {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   const getUser = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/user"); // Full URL
//       if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//       const data = await res.json();
//       setUser(data);
//     } catch (error) {
//       console.error("Error fetching user:", error);
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   return (
//     <div>
//       <h1>Weather App</h1>
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       {user ? (
//         <div>
//           <h2>User Info</h2>
//           <p>Name: {user.name}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Login from './comonents/Login'

function App() {
  return (
    <>
    <Login />
    </>
  )
}

export default App