import { useState, useEffect } from 'react'
import './App.css';
import useGetUsers from './hooks/network/useGetUsers';
import type { TUser } from './hooks/network/types';
import UserItem from './components/user-item/UserItem';

function App() {
  const [users, setUsers] = useState<TUser[]>([]);

  const { loading, request: getUsers } = useGetUsers();

  useEffect(() => {
    const fetchData = async () => {

      const users = await getUsers();
      if(users){
        setUsers(users!)
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <h1>User List</h1>
      <div className="card">
        {loading ? <p>Cargando usuarios...</p> : <UserItem users={users}/>}
      </div>
    </>
  )
}

export default App
