import './Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  if(location.pathname === '/') return null;

  return(
    <div className="header-background">
      <div className='header-container'>
        <div className="header-title">WARMs</div>
        <button className="logout">로그아웃</button>
      </div>
    </div>
  )
}
export default Header;