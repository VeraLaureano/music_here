import { Schema, model } from "mongoose";
import { Song } from "../interfaces/song.interface";

export const SongSchema = new Schema<Song>({
    title: {
        type: String,
        required: [true, "MUST_PROVIDE_NAME"]
    },
    artist: {
        type: [String, Array],
        required: [true, "MUST_PROVIDE_ARTIST"]
    },
    producer: {
        type: [String, Array],
        required: [true, "MUST_PROVIDE_PRODUCER"]
    },
    genre: {
        type: [String, Array],
        required: [true, "MUST_PROVIDE_GENRE"]
    },
    release: {
        type: String,
        required: [true, "MUST_PROVIDE_RELEASE"]
    },
    album: {
        type: String,
        required: false
    },
    time: {
        minutes: {
            type: Number,
            required: [true, "MUST_PROVIDE_MINUTES"]
        },
        seconds: {
            type: Number,
            required: [true, "MUST_PROVIDE_MINUTES"]
        },
    },
    spotify: {
        type: String,
        required: [true, "MUST_PROVIDE_SPOTIFY_LINK"]
    },
    cover: {
        type: String,
        required: [true, "MUST_PROVIDE_COVER_URL"]
    },
    rating: Number
})

const SongModel = model("Song", SongSchema);
export default SongModel;