import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import nav from './Header.module.css';

const Header = () => (
  <nav className={nav.main}>
    <div className={`ml-6 ${nav.menu}`}>
      <Link to="/" className="o-td"><h1 className="mr-4 cl-blue primary-font">Bookstore CMS</h1></Link>
      <Link to="/" className="o-td"><p className="mr-4 mt-2p5 primary-font o-td cl-black">Books</p></Link>
      <Link to="/categories" className="o-td"><p className="mt-2p5 primary-font o-td cl-black disabled-black">Categories</p></Link>
    </div>
    <div className={nav.user}>
      <PersonIcon color="primary" />
    </div>
  </nav>
);

export default Header;
