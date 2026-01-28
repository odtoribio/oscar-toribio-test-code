import type { TUser } from '../../hooks/network/types'
import './UserItem.css';
import useGetPosts from '../../hooks/network/useGetPosts';

type UserProps = {
  users: TUser[];
}

const UserItem = ({ users }: UserProps) => {

  const { data: posts, getPost } = useGetPosts();

  if (users.length === 0) return [];
  
  const handleUserClick = async (id: number) => {
    getPost(id);
    console.log({posts})
  }

  return (
    <>
      {users.map((user) => (
        <div className='user-container' key={user.id} onClick={() => handleUserClick(user.id)}>
          <label>USUARIO: {user.username}</label>
          <span>|</span>
          <label>EMAIL: {user.email}</label>
          <span>|</span>
          <label>CIUDAD: {user.address.city}</label>
        </div>
      ))}
    </>

  )
}

export default UserItem