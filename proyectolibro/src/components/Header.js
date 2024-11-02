// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ onSearch }) {

    const navigate = useNavigate();
    const handleClickLibroHub = () => {
      navigate('/');
    };

    const handleClickAdmin = () => {
      navigate('/admin');
    };

  return (
    <header className="header">
      <button className="header-btn" onClick={handleClickLibroHub}>LibroHub</button>
      <button className="admin-btn" onClick={handleClickAdmin}>Admin</button>
      <input
        type="text"
        placeholder="Buscar libro"
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
      {/*<button className="header-btn cart-btn">Carrito</button>*/}
      <Link to="/cart" className="header-btn cart-btn">Carrito</Link>
    </header>
  );
}
export default Header;
