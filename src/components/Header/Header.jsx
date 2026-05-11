import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <span className="header-logo-icon" aria-hidden="true">🌟</span>
        <span className="header-logo-text">MyApp</span>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "header-link header-link--active" : "header-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header-link header-link--active" : "header-link"
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
