import React from "react";
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from './jotaflix.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar__jotaflix">
            <NavLink className="navbar-brand" to="/" ><img className="img__jotaflix" src={logo} alt="Jotaflix" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/discover" className="nav-item nav-link">Discover</NavLink>
                    <NavLink to="/upcoming" className="nav-item nav-link" >Upcoming</NavLink>
                    <NavLink to="/favs" className="nav-item nav-link" >Favourites</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;