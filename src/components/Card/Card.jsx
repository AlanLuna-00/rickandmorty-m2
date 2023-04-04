import { Link } from 'react-router-dom';
import './Card.css'

export default function Card(props) {
   return (
      <div className={`card ${props.status === 'Alive' ? 'alive' : props.status === 'Dead' ? 'dead' : ''}`}>
            <img className="img" src={`${props.image}`} alt={`${props.name}`} />
            <h1 className="name">{props.name}</h1>
            <h2 className={props.status === 'Dead' ? 'status_dead' : props.status === 'Alive' ? 'status_alive' : 'gender'}>{props.status}</h2>
            <h2 className="gender">{props.gender} {props.species}</h2>
            <h2 className="origin">{props.origin}</h2>
            <Link to={`/detail/${props.id}`}><button className="detail">Detail</button></Link>
            <button onClick={props.onClose} className="quit">X</button>
      </div>
   );
}
