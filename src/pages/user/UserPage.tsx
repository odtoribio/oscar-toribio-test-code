import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import useGetUsers from '../../hooks/network/useGetUsers'
import './User.css';
import { PATHS_DYNAMIC } from '../../routes/app-routes';
import type { TUser } from '../../hooks/network/types';
import useStoreFavorites from '../../hooks/utils/useStoreFavorites';

const UserPage = () => {
  const {checkIsFavorite, saveToStore, removeFromStore} = useStoreFavorites()
  const { id: userId } = useParams();
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    return checkIsFavorite(Number(userId))
  });
  const { data: users, loading, getUsers } = useGetUsers();
  const navigate = useNavigate();

  const handleUserClick = async (user: TUser) => {
    navigate(PATHS_DYNAMIC.POSTS(user.id));
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!isFavorite){
      saveToStore(Number(userId))
    } else {
      removeFromStore(Number(userId))
    }
    setIsFavorite(e.target.checked)
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
        <label>
          Favorite:
          <input
            type='checkbox'
            checked={isFavorite}
            onChange={handleChecked}
          />
        </label>
        <button className='go-to-comments-btn' onClick={() => handleUserClick(user)}>
          Go to user posts
        </button>
      </div>
    </div>
  )
}

export default UserPage
