import React, { useState } from 'react';

export default function SearchBar(props) {
   const [Id, setId] = useState('');

   return (
      <div className='searchBar'>
         <button onClick={() => props.randomCharacter()} className="search-button-2">Random Character</button>
         <input type='text' placeholder='Search by ID' onChange={(e) => setId(e.target.value)} />
         <button onClick={() => props.onSearch(Id)} className='search-button-1'>Search</button>
      </div>
   );
}
