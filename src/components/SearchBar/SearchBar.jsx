import React, { useState } from 'react';
import './SearchBar.css'

export default function SearchBar(props) {
   const [Id, setId] = useState('');

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         props.onSearch(Id);
         setId('');
         e.preventDefault();
      }
   };

   let randomNum = Math.floor(Math.random() * 826) + 1;
   
   return (
      <div className='searchBar bar-container'>
         <button onClick={() => props.onSearch(randomNum)} className="search-button-2">Random</button>
         <input className='searchID' type='text' onKeyDown={handleKeyDown} placeholder='Search by ID' onChange={(e) => setId(e.target.value)} />
      </div>
   );
}
