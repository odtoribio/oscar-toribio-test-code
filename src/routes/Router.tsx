import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home';
import Posts from '../pages/posts';
import NotFound from '../pages/not-found';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/posts/user/:id" element={<Posts />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default Router
