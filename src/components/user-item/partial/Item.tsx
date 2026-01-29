import React, {useState} from 'react'
import type { TUser } from '../../../hooks/network/types'
import { useNavigate } from 'react-router-dom'
import { PATHS_DYNAMIC } from '../../../routes/app-routes'
import useStoreFavorites from '../../../hooks/utils/useStoreFavorites'
import './Item.css'

type ItemProps = {
  user: TUser
}
const Item = ({user}: ItemProps) => {
  const {checkIsFavorite, saveToStore, removeFromStore} = useStoreFavorites()
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    return checkIsFavorite(user.id)
  });
  const navigate = useNavigate();

  const handleUserClick = async (user: TUser) => {
    navigate(PATHS_DYNAMIC.USER(user.id));
  }

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(!isFavorite){
      saveToStore(user.id)
    } else {
      removeFromStore(user.id)
    }
    setIsFavorite(e.target.checked)
  }

  return (
    <div className='item-container' onClick={() => handleUserClick(user)}>
      <p>{user.name}</p>
      <div className='checkbox-container' onClick={(e) => e.stopPropagation()}>
        <label>Favorite:</label>
        <input 
          type='checkbox'
          value="fav"
          checked={isFavorite}
          onChange={handleChecked}
        />
      </div>
    </div>
  )
}

export default Item;
