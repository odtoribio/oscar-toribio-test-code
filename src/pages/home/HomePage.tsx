import {useEffect, useState} from 'react'
import UserItem from '../../components/user-item/UserItem'
import useGetUsers from '../../hooks/network/useGetUsers';
import './Home.css'

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const { data: users, loading, getUsers } = useGetUsers();

  const filteredUser = users.filter(user => user.name.toLowerCase()
      .includes(searchText.toLowerCase()))

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h2>User List</h2>
      <input 
        className='search-input'
        placeholder='Search user'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="card">
        {loading ? <p>Loading users...</p> : <UserItem users={filteredUser}/>}
      </div>
    </>
  )
}

export default HomePage
