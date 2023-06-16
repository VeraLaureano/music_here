import { Router } from "express";
import { deleteSong, getAllSongs, getOneSong, pathSong, postSong } from "../controllers/song.controller";
const router = Router();

router.route("/").get(getAllSongs).post(postSong);
router.route("/:id").get(getOneSong).patch(pathSong).delete(deleteSong);

export { router as songRouter }