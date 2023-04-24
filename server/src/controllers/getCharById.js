import axios from "axios";

export const getCharById = async (res, id) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const { data } = response;
        const char = {
            id: data.id,
            name: data.name,
            status: data.status,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            location: data.location,
            image: data.image,
        }
        res.status(200).send(char);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};




// try {
//     const { data } = await axios.get(
//     `https://rickandmortyapi.com/api/character/${id}`
    // );
//     console.log(data);
//     return data;
// } catch (error) {
//     console.log(error);
// }