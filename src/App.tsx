import { useEffect } from 'react'
import './App.css';
import useGetUsers from './hooks/network/useGetUsers';
import UserItem from './components/user-item/UserItem';

function App() {
  const { data: users, loading, getUsers } = useGetUsers();
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h1>User Intelligence Platform</h1>
      <div className="card">
        {loading ? <p>Cargando usuarios...</p> : <UserItem users={users}/>}
      </div>
    </>
  )
}

export default App
