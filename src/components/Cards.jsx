import Card from './Card';

export default function Cards({characters, onClose}) {
   return <div className='container'>
      {characters.map((value, i) => {
         return <Card
            key={i}
            id={i}
            name={value.name}
            status={value.status}
            species={value.species}
            origin={value.origin.name}
            image={value.image}
            onClose={() => onClose(i)}
         />
      })}
   </div>;
}
