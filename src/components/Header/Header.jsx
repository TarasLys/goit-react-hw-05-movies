import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className={css.decoreLink}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.decoreLink}>
            <NavLink to="/Movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
