import express from 'express';

import data from './utils/data.js';

const server = express();

const PORT = 3001;

server.get('/rickandmorty/characters', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data);
});

server.get('/rickandmorty/characters/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = Number(req.params.id);
    const character = data.find((character) => character.id === id);
    res.json(character);
});

server.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});



