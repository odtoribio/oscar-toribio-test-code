import { useNavigate } from "react-router-dom";
import type { TUser } from '../../hooks/network/types'
import { PATHS_DYNAMIC } from "../../routes/app-routes";
import './UserItem.css';

type UserProps = {
  users: TUser[];
}

const UserItem = ({ users }: UserProps) => {
  const navigate = useNavigate();

  if (users.length === 0) return [];
  
  const handleUserClick = async (user: TUser) => {
    navigate(PATHS_DYNAMIC.USER(user.id));
  }

  return (
    <>
      <p>User names:</p>
      {users.map((user) => (
        <>
          <div className='item-container' key={user.id} onClick={() => handleUserClick(user)}>
            <p>{user.name}</p>
          </div>
        </>
      ))}
    </>

  )
}

export default UserItem
