export interface Song {
    title: string;
    artist: string | Array<string>;
    producer: string | Array<string>;
    genre: string | Array<string>;
    release: string;
    album: string | null;
    time: { minutes: number; seconds: number };
    spotify: string;
    cover: string;
    rating: number;
}