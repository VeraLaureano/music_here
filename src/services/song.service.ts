import SongModel from "../models/Song.model";
import { Song } from "../interfaces/song.interface";

/**
 * @returns all songs found
 * @type Promise
 */
export const findAllSongs =async () => {
    const responseSongs = await SongModel.find({})
    return responseSongs;
}

/**
 * @param songID string
 * @returns a soung found
 * @type Promise
 */
export const findOneSong = async (songID: string) => {
    const responseSong = await SongModel.findOne({_id: songID});
    return responseSong;
} 

/**
 * @param data Song
 * @returns new song
 * @type Promise
 */
export const createSong = async (data: Song) => {
    const responseSong = await SongModel.create(data);
    return responseSong
}

/**
 * @param songID string
 * @param data Song
 * @returns update song
 * @type Promise
 */
export const findAndUpdateSong = async (songID: string, data: Song) => {
    const responseSong = await SongModel.findOneAndUpdate({_id: songID}, data, {new: true});
    return responseSong;
}

/**
 * @param songID string
 * @returns delete song
 * @type Promise
 */
export const findAndDeleteSong = async (songID: string) => {
    const responseSong = await SongModel.findByIdAndDelete({_id: songID})
    return responseSong;
}