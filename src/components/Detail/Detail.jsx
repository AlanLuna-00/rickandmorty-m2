import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Detail.css'

export default function Detail() {

    const { id } = useParams();

    const parsedId = parseInt(id);

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${parsedId}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data);
            });
    }, [parsedId]);

    return (
        <div className="detail-container">
            <div className={`detail-card ${character.status === 'Alive' ? 'detail-card-alive' : 'detail-card-dead'}`}>
                <img src={character.image} alt={character.name} />
                <div className="detail-card-info">
                    <h1>{character.name}</h1>
                    <h2>{character.species} - {character.status === 'unknown' ? 'Estado de vida desconocido' : character.status}</h2>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin?.name}</p>
                    <p>Location: {character.location?.name}</p>
                </div>
            </div>
        </div>
    );
    }