import SongModel from "../models/Song.model";

/**
 * @returns all songs found
 * @type Promise
 */
export const findAllSongs =async () => {
    const responseSongs = await SongModel.find({})
    return responseSongs;
}