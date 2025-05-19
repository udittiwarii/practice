import React, { useState } from 'react';
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  const [users, setUsers] = useState(
    [
      { name: 'john do ', age: 89 },
      { name: 'john sena', age: 40 },
      { name: 'john kalu  ', age: 90 }
    ]
  );

  return (
    <>
   <Create/>
      <hr />
      <Read users = {users} setusesrs = {setUsers}/>
    </>
  )
};

export default App