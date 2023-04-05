import React, { useState } from 'react';

export default function SearchBar(props) {
   const [Id, setId] = useState('');

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         props.onSearch(Id);
         setId('');
         e.preventDefault();
      }
   };
   
   return (
      <div className='searchBar'>
         <button onClick={() => props.randomCharacter()} className="search-button-2">Random</button>
         <input className='searchID' type='text' onKeyDown={handleKeyDown} placeholder='Search by ID' onChange={(e) => setId(e.target.value)} />
      </div>
   );
}
