import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ logout }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='rick-and-morty'>Rick and morty</h1>
                </div>
            </div>
            <div className='navbar-links'>
                <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : 'disabled'}`} to='/home'>Home</NavLink>
                <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : 'disabled'}`} to='/about'>About</NavLink>
                <NavLink className={`navlink ${({isActive}) => isActive ? 'active' : 'disabled'}`} to='/favorites'>Favorites</NavLink>
                <button className='logout-button' onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} /></button>
            </div>
        </nav>





    )
}

export default NavBar

