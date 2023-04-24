import { Router } from "express";

import { getCharById } from "../controllers/getCharById.js";
import login from "../controllers/login.js";
import { postFav, deleteFav } from "../controllers/handleFavorites.js";

const router = Router();

router.get("/", login);

router.get("/:id", (req, res ) => {
    const id = Number(req.params.id);
    getCharById(res, id);
});

router.post("/favorites", (req, res) => postFav(req, res));

router.delete("/favorites/:id", (req, res) => deleteFav(req, res));



export default router;
