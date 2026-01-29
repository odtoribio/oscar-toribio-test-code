import {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import useGetUsers from '../../hooks/network/useGetUsers'
import './User.css';
import { PATHS_DYNAMIC } from '../../routes/app-routes';
import type { TUser } from '../../hooks/network/types';

const UserPage = () => {
  const { id: userId } = useParams();
  const { data: users, loading, getUsers } = useGetUsers();
  const navigate = useNavigate();

  const handleUserClick = async (user: TUser) => {
    navigate(PATHS_DYNAMIC.POSTS(user.id));
  }

  useEffect(() => {
    if(userId && !isNaN(Number(userId))){
      getUsers();
    }
  }, [getUsers]);

  const user = users.find(usr => usr.id === Number(userId));
  if(loading) return <p>Loading user...</p>
  if(!user) return <p>User not found</p>
  const address = `${user.address.street}, ${user.address.city}, suite ${user.address.suite}`

  return (
    <div>
      <div className='user-container'>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Address: {address}</p>
      </div>
      <button className='go-to-comments-btn' onClick={() => handleUserClick(user)}>
        Go to user posts
      </button>
    </div>
  )
}

export default UserPage
