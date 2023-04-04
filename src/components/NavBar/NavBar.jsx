import React from 'react'
import SearchBar from '../SearchBar'
import './NavBar.css'

const NavBar = ({ onSearch, randomCharacter }) => {
    return (
        <nav className='navbar'>
            <div className='rick-and-morty'>Rick and Morty</div>
            <SearchBar onSearch={onSearch} randomCharacter={randomCharacter}/>
        </nav>
    )
}

export default NavBar

