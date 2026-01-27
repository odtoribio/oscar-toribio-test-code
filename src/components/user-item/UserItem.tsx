import type { TUser } from '../../hooks/network/types'
import './UserItem.css';
import useGetPosts from '../../hooks/network/useGetPosts';

type UserProps = {
  users: TUser[];
}

const UserItem = ({ users }: UserProps) => {

  const { request: getPosts } = useGetPosts();

  if (users.length === 0) return [];
  
  const handleUserClick = async (id: number) => {
    const posts = await getPosts(id);
    console.log({posts})
  }

  return (
    <>
      {users.map((user) => (
        <div className='user-container' key={user.id} onClick={() => handleUserClick(user.id)}>
          <label>USUARIO: {user.username}</label>
          <label>EMAIL: {user.email}</label>
          <label>CIUDAD: {user.address.city}</label>
        </div>
      ))}
    </>

  )
}

export default UserItem