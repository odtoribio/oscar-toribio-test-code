import { useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-container">
      <div>
        <p>Page not found</p>
        <button onClick={() => navigate('/')}>Go to home page</button>
      </div>
    </div>
  )
}

export default NotFoundPage
