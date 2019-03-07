import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/discover" >Jotaflix</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/discover" className="nav-item nav-link">Discover</NavLink>
                    <NavLink to="/upcoming" className="nav-item nav-link" >Upcoming</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;