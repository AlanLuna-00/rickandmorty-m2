import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'
import './NavBar.css'

const NavBar = ({ onSearch, randomCharacter }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <h1 className='rick-and-morty'>Rick and morty</h1>
                </div>
            </div>
            <div className='navbar-links'>
                <Link  to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <SearchBar onSearch={onSearch} randomCharacter={randomCharacter} />
            </div>
        </nav>
    )
}

export default NavBar

