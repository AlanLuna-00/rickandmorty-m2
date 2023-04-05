import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar'
import './NavBar.css'

const NavBar = ({ onSearch, randomCharacter, logout }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='rick-and-morty'>Rick and morty</h1>
                </div>
            </div>
            <div className='navbar-links'>
                <NavLink className={({isActive}) => isActive ? '.active' : '.disabled'} to='/home'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? '.active' : '.disabled'} to='/about'>About</NavLink>
                <SearchBar onSearch={onSearch} randomCharacter={randomCharacter} />
                {/* logout button */}
                <button className='logout-button' onClick={logout}><i class="fa fa-sign-out" style={{fontSize : '26px'}}></i></button>
            </div>
        </nav>
    )
}

export default NavBar

