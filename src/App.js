import { async } from 'q';
import './App.css';
import UserCards from './Components/UserCards'
import React, { useState, useEffect } from 'react';

const App =() => {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    const fetchUsers = async ()=>{
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=10')
      const data  = await response.json()
      console.log(data);
      setUsers(data)
    }
    fetchUsers()

  },[])
  return (
    <div className="grid grid-cols-2 justify-center">
      {users.map((user) => (
        <UserCards  user={user} />
      ))}
    </div>
  );
}

export default App;
