import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFav } from "../../redux/actions";
import "./Favorites.css";
import { filterCards, orderCards } from "../../redux/actions";
import toast, { Toaster } from 'react-hot-toast';
import Card from "../Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleRemoveFav = (id, name) => {
    dispatch(removeFav(id));
    toast.error(`${name} eliminado de favs 💔`);
  };

  const handleFilterCards = (e) => {
    dispatch(filterCards(e.target.value));
    console.log(e.target.value)
  };

  const [aux, setAux] = useState(false)

  const handleOrderCards = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
  };

  console.log(favorites)
  return (
    <>
      <div className="container-filters">
        <select onChange={handleOrderCards} >
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilterCards} >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="alls">Todos</option>
        </select>
      </div>

      <div className="container-favorites">
        {favorites.length === 0  ? 
          <h1 style={{color:'white'}}>No hay favoritos 💔</h1>
          :
          favorites.map((fav, i) => (
          <div key={i}>
              <Card
                key={i}
                id={fav.id}
                name={fav.name}
                image={fav.image}
                species={fav.species}
                status={fav.status}
                origin={fav.origin}
                gender={fav.gender}
                onClose={() => handleRemoveFav(fav.id, fav.name)}
              />
            <Toaster position='top-left' />
          </div>

        ))
        }
      </div>
    </>
  );
};

export default Favorites;
