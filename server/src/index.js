import express from 'express';
import router from './routes/index.js';

const server = express();

const PORT = 3001;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use('/rickandmorty', router);

// server.get('/rickandmorty/characters/:id', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const id = Number(req.params.id);
//     getCharById(res, id);
// });

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



