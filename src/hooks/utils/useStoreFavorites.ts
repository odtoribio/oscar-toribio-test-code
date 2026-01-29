const STORE_KEY = 'user_favorites_id'

const useStoreFavorites = () => {

  const getFavorites = () => {
    const savedFavorites = localStorage.getItem(STORE_KEY);
    const favorites: string[] = savedFavorites ? JSON.parse(savedFavorites) : [];
    return favorites;
  }

  const checkIsFavorite = (id: number): boolean => {
    const favorites = getFavorites();
    return favorites.includes(id.toString())
  }

  const saveToStore = (id: number) => {
    const favorites = getFavorites();
    if(!favorites.includes(id.toString())){
      favorites.push(id.toString());
      localStorage.setItem(STORE_KEY, JSON.stringify(favorites))
    }
  }

  const removeFromStore = (id: number) => {
    const favorites = getFavorites();
    if(favorites.includes(id.toString())){
      const favoritesCopy = favorites.filter(fav => fav !== id.toString())
      localStorage.setItem(STORE_KEY, JSON.stringify(favoritesCopy))
    }
  }
  return {getFavorites, saveToStore, removeFromStore, checkIsFavorite}
}

export default useStoreFavorites;
