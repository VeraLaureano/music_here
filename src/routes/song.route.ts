import { Router } from "express";
import { getAllSongs } from "../controllers/song.controller";
const router = Router();

router.route("/").get(getAllSongs);

export { router as songRouter }