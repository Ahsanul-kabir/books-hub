import React from 'react';
import { NavLink } from 'react-router-dom';
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
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/review" activeClassName="active">Review</NavLink></li>
                <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/search" activeClassName="active"><i className="fas fa-search"></i></NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;