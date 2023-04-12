import Card from './Card/Card';
import SearchBar from './SearchBar/SearchBar';

export default function Cards({characters, onClose, onSearch, randomCharacter}) {
   return( <>
   <SearchBar onSearch={onSearch} randomCharacter={randomCharacter} />
   <div className='container'>
      {characters.map((value, i) => {
         return <Card
            key={i}
            id={value.id}
            name={value.name}
            status={value.status}
            species={value.species}
            origin={value.origin.name}
            image={value.image}
            location={value.location.name}
            onClose={() => onClose(i)}
         />
      })}
   </div>;
   </>
   )
}
