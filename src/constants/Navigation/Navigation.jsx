import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'
import logo from '../../assets/logo-medium.png';
function Navigation() {
    return (
        <nav>
            <div className="inner-container-nav">
                <div className="image-wrapper">
                    <img src={logo} alt="Logo medium"/>
                </div>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/Overview">Alle posts</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-menu-link" : "default-menu-link"} to="/NewPosts">Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;