import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/home';
import PostsPage from '../pages/posts';
import NotFoundPage from '../pages/not-found';
import UserPage from '../pages/user';
import FavoritesPage from '../pages/favorites/FavoritesPage';
import DashboardPage from '../pages/dashboard';
import { PATHS } from './app-routes';

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={PATHS.POSTS} element={<PostsPage />}/>
        <Route path={PATHS.USER} element={<UserPage />}/>
        <Route path={PATHS.FAVORITES} element={<FavoritesPage />}/>
        <Route path={PATHS.DASHBOARD} element={<DashboardPage />}/>
      </Route>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
  )
}

export default Router
