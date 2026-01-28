import { useNavigate } from "react-router-dom";
import type { TUser } from '../../hooks/network/types'
import './UserItem.css';

type UserProps = {
  users: TUser[];
}

const UserItem = ({ users }: UserProps) => {
  const navigate = useNavigate();

  if (users.length === 0) return [];
  
  const handleUserClick = async (user: TUser) => {
    navigate(`/posts/user/${user.id}`);
  }

  return (
    <>
      {users.map((user) => (
        <div className='user-container' key={user.id} onClick={() => handleUserClick(user)}>
          <label>USERNAME: {user.username}</label>
          <span>|</span>
          <label>EMAIL: {user.email}</label>
          <span>|</span>
          <label>CITY: {user.address.city}</label>
        </div>
      ))}
    </>

  )
}

export default UserItem
