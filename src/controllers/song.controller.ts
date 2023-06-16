import { Request, Response } from "express";
import { createSong, findAllSongs, findAndDeleteSong, findAndUpdateSong, findOneSong } from "../services/song.service";
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

/**
 * @method [GET]
 * @description search a sound with in params
 */
export const getOneSong = asyncWrapper(
    async({params: {id}}: Request, res: Response) => {
        const data = await findOneSong(id);
        
        if (!data)
            return res.status(500).json({
                message: `NO_SONG_WITH_ID_${id}`,
                error: "INTERNAL_SERVER_ERROR",
                statusCode: 500
            })

        return res.status(200).json(data);        
    }   
)

/**
 * @method [POST]
 * @description post a new song in the db
 */
export const postSong = asyncWrapper(
    async ({body}: Request, res: Response) => {
        const newData = await createSong(body);
        return res.status(201).json(newData);
    }
)

/**
 * @method [PATCH]
 * @description update the found song
 */
export const pathSong = asyncWrapper(
    async({params: { id }, body}: Request, res: Response) => {
        const newData = await findAndUpdateSong(id, body);

        if (!newData) return res.status(500).json({
            message: `NO_SONG_WITH_ID_${id}`,
            error: "INTERNAL_SERVER_ERROR",
            statusCode: 500
        })

        return res.status(201).json(newData)
    }
)

/**
 * @method [DELETE]
 * @description delete the soung found
 */
export const deleteSong = asyncWrapper(
    async ({params: {id}}: Request, res: Response) => {
        const data = await findAndDeleteSong(id);

        if (!data) return res.status(500).json({
            message: `NO_SONG_WITH_ID_${id}`,
            error: "INTERNAL_SERVER_ERROR",
            statusCode: 500
        })

        return res.status(200).json({
            message: "DELETE_SUCCESS", song: null, statusCode: 200
        })
    }
)