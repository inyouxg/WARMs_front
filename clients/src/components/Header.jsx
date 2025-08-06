import './Header.css';
import { useLocation,useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  if(location.pathname === '/') return null;

  return(
    <div className="header-background" onClick={() => navigate("/home")}>
      <div className='header-container'>
        <div className="header-title">WARMs</div>
        <button className="logout">로그아웃</button>
      </div>
    </div>
  )
}
export default Header;