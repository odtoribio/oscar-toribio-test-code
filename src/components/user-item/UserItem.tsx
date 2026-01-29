import type { TUser } from '../../hooks/network/types'
import './UserItem.css';
import Item from "./partial";

type UserProps = {
  users: TUser[];
}

const UserItem = ({ users }: UserProps) => {
  
  if (users.length === 0) return [];

  return (
    <>
      <p>User names:</p>
      {users.map((user) => (
        <Item user={user} key={user.id} />
      ))}
    </>

  )
}

export default UserItem
