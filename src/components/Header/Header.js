import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div class="logo">Books Hub</div>
            <input type="checkbox" id="click" />
            <label for="click" class="menu-btn">
                <i class="fas fa-bars"></i>
            </label>
            <ul>
                <li><Link class="active" to="/">Home</Link></li>
                <li><Link to="/review">Review</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/"><i class="fas fa-search"></i></Link></li>
            </ul>
        </nav>
    );
};

export default Header;