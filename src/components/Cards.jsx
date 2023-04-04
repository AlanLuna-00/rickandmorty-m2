import Card from './Card/Card';

export default function Cards({characters, onClose}) {
   return <div className='container'>
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
}
