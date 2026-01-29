import {useEffect} from 'react'
import useGetUsers from '../../hooks/network/useGetUsers';
import UserItem from '../../components/user-item';
import useStoreFavorites from '../../hooks/utils/useStoreFavorites';

const FavoritesPage = () => {
  const { data: users, loading, getUsers } = useGetUsers();
  const {getFavorites} = useStoreFavorites();
  const favorites = getFavorites();

  const filteredUser = users.filter(user => favorites.includes(user.id.toString()))

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if(!filteredUser || filteredUser.length === 0) return <p>No favorites added</p>

  return (
    <>
      <h2>Favorites</h2>
      <div className="card">
        {loading ? <p>Loading users...</p> : <UserItem users={filteredUser}/>}
      </div>
    </>
  )
}

export default FavoritesPage;
