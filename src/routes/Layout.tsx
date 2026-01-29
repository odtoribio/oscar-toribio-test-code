import { Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'
import { PATHS_DYNAMIC } from './app-routes';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 onClick={() => navigate('/')}>User Intelligence Platform</h1>
      <button className="go-home-btn" onClick={() => navigate(PATHS_DYNAMIC.HOME)}>Go Home</button>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
