import axios from "axios";

export const getCharById = async (res, id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const char = response.data;
        res.status(200).send(char);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};
