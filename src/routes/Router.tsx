import {Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/home';
import Posts from '../pages/posts';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/posts/user/:id" element={<Posts />}/>
      </Route>
      <Route path="*" element={<p>Page not found</p>}/>
    </Routes>
  )
}

export default Router
