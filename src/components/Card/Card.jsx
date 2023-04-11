import { Link } from 'react-router-dom';
import './Card.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

const Card = (props) => {

   const [fav, setFav] = useState(false)

   const myFavorites = useSelector(state => state.myFavorites)
   const dispatch = useDispatch()
   
   const handleFav = () => {
      if (fav) {
         dispatch(removeFav(props.id))
         setFav(false)
      } else {
         dispatch(addFav(props))
         setFav(true)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
   }, [myFavorites, props.id]);

   return (
      <div className={`card-pj ${props.status === 'Alive' ? 'alive' : props.status === 'Dead' ? 'dead' : ''}`}>
         <img className="img" src={`${props.image}`} alt={`${props.name}`} />
         <h1 className="name">{props.name}</h1>
         <h2 className={props.status === 'Dead' ? 'status_dead' : props.status === 'Alive' ? 'status_alive' : 'gender'}>{props.status === 'unknown' ? 'Estado de vida desconocido' : props.status}</h2>
         <h2 className="gender">{props.gender} {props.species}</h2>
         <h2 className="origin">{props.origin === 'unknown' ? 'Procedencia desconocida' : props.origin}</h2>
         <Link to={`/detail/${props.id}`}><button className={props.status === 'Dead' ? 'detail-dead' : props.status === 'Alive' ? 'detail-alive' : 'detail'}>Detail</button></Link>
         <button onClick={props.onClose} className="quit">X</button>
         {
            fav ? (
               <button className='favButton isFav' onClick={handleFav}>💔</button>
            ) : (
               <button className='favButton isntFav' onClick={handleFav}>❤️</button>
            )
         }
      </div>
   );
}

export default Card;
