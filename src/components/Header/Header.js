import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className="logo">Books Hub</div>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/"><i className="fas fa-search"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Header;