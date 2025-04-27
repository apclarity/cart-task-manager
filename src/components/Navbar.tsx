import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../styles/navbar.scss';

interface NavbarProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
}

const Navbar: React.FC<NavbarProps> = ({ setLoading }) => {
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("token");
    setTimeout(() => {
      setLoading(false); 
      navigate("/login");
    }, 1000); 
  };

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <div className="nav-wrapper">
      <nav>
        <div className="nav-container">
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/products" onClick={handleLinkClick}>Products</Link></li>
            <li><Link to="/tasks" onClick={handleLinkClick}>Tasks</Link></li>
            <li><Link to="/cart" onClick={handleLinkClick}>Cart</Link></li>
            {token ? (
              <li>
                <button className="signout" onClick={handleLogout}>Sign Out</button>
              </li>
            ) : (
              <>
                <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
                <li><Link to="/register" onClick={handleLinkClick}>Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
