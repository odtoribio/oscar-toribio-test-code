import { Outlet, useNavigate } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 onClick={() => navigate('/')}>User Intelligence Platform</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
