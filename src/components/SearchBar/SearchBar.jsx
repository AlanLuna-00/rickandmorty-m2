import React, { useState } from 'react';
import './SearchBar.css'
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar(props) {
   
   const [Id, setId] = useState('');

   const verifyDataOnKeyDown = (e) => {
      const value = e.target.value;
      const isString = isNaN(value);

      if (e.key === 'Enter') {
         if (isString) {
            toast.error('El dato proporcionado es invalido');
         } else {
            props.onSearch(Id);
         }
      }
   }


   let randomNum = Math.floor(Math.random() * 826) + 1;

   return (
      <div className='searchBar bar-container'>
         <button onClick={() => props.onSearch(randomNum)} className="search-button-2">Random</button>
         <input className='searchID' type='text' onKeyDown={verifyDataOnKeyDown} placeholder='Search by ID' onChange={(e) => setId(e.target.value)} />
         <Toaster position='top-left' />
      </div>
   );
}
