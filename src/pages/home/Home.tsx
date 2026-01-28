import {useEffect} from 'react'
import UserItem from '../../components/user-item/UserItem'
import useGetUsers from '../../hooks/network/useGetUsers';
import './Home.css'

const Home = () => {
  const { data: users, loading, getUsers } = useGetUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h2>User List</h2>
      <div className="card">
        {loading ? <p>Loading users...</p> : <UserItem users={users}/>}
      </div>
    </>
  )
}

export default Home