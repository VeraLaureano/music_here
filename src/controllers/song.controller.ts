import { Request, Response } from "express";
import { findAllSongs } from "../services/song.service";
import { asyncWrapper } from "../utils/asyncWrapper";

/**
 * @method [GET]
 * @description search all songs
 */

export const getAllSongs = asyncWrapper(
    async (_req: Request, res: Response) => {
        const data = await findAllSongs();
        return res.status(200).json(data);
    }
  );