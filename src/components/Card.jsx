export default function Card(props) {
   return (
      <div className="card">
            <img className="img" src={`${props.image}`} alt={`${props.name}`} />
            <h1 className="name">{props.name}</h1>
            <h2 className="status">{props.status}</h2>
            <h2 className="gender">{props.gender} {props.species}</h2>
            <h2 className="origin">{props.origin}</h2>
            <button onClick={props.onClose} className="quit">X</button>
      </div>
   );
}
