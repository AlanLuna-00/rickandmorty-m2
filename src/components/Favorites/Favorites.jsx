import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFav } from "../../redux/actions";
import "./Favorites.css";

const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    const handleRemoveFav = (id) => {
        dispatch(removeFav(id));
    }

    return (
        <>
            <div className="container-favorites">
                {favorites.map((fav, i) => (
                    <div key={i} className={`card-pj ${fav.status === 'Alive' ? 'alive' : fav.status === 'Dead' ? 'dead' : ''}`}>
                        <img className="img" src={`${fav.image}`} alt={`${fav.name}`} />
                        <h1 className="name">{fav.name}</h1>
                        <h2 className={fav.status === 'Dead' ? 'status_dead' : fav.status === 'Alive' ? 'status_alive' : 'gender'}>{fav.status === 'unknown' ? 'Estado de vida desconocido' : fav.status}</h2>
                        <h2 className="gender">{fav.gender} {fav.species}</h2>
                        <h2 className="origin">{fav.origin === 'unknown' ? 'Procedencia desconocida' : fav.origin}</h2>
                        <Link to={`/detail/${fav.id}`}><button className={fav.status === 'Dead' ? 'detail-dead' : fav.status === 'Alive' ? 'detail-alive' : 'detail'}>Detail</button></Link>
                        <button onClick={() => handleRemoveFav(fav.id)} className="quit">💔</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Favorites;
