import server from './app.js';
import dotenv from 'dotenv';
dotenv.config();

server.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
});




