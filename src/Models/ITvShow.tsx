import IEpisode from "./IEpisode";

export default interface ITvShow {
    countdown: null;
    country: string;
    description: string;
    description_source: string;
    end_date: string | null;
    episodes: IEpisode[];
    genres: string[];
    id: number;
    image_path: string;
    image_thumbnail_path: string;
    name: string;
    network: string;
    permalink: string;
    pictures: string[];
    rating: string;
    rating_count: number;
    runtime: number;
    start_date: string;
    status: string;
    url: string;
    youtube_link: string | null;
}