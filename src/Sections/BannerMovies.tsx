import ITvShow from "../Models/ITvShow";
import TvShowCard from "../Components/TvShowCard";
import { useEffect, useState } from "react";

interface BannerMovieProps{
    tvShows: ITvShow[] | undefined
}

export default function BannerMovies({tvShows}: BannerMovieProps){
    const [idSelectedTvShow,setidSelectedTvShow] = useState<number>();
    const [selectedTvShow,setSelectedTvShow] = useState<ITvShow | undefined>(tvShows![0]);

    useEffect(()=>{
        fetch(`https://www.episodate.com/api/show-details?q=${idSelectedTvShow || selectedTvShow?.id}`).then(async (response)=>{
            const data = await response.json();
            setSelectedTvShow(data.tvShow);
        });
    },[idSelectedTvShow])

    return <>
        <div className="min-h-screen max-h-screen grid grid-rows-5 p-10">
            <div className="grid grid-cols-2 transition-all col-start-1 row-span-3 row-start-1 p-5">
                <div className="flex flex-col pt-10 top-0">
                    <h1 className="text-2xl font-semibold">{selectedTvShow?.name}</h1>
                    <div className="max-w-xl inline-block max-h-36 mt-5 overflow-hidden text-ellipsis whitespace-pre-wrap">
                        {selectedTvShow?.description}
                    </div>
                    <div className="mt-5">
                        <button className="bg-amber-600 px-10 py-2 rounded-full text-white  text-lg">Play</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 max-h-90 overflow-hidden">
                    {
                        selectedTvShow?.pictures && selectedTvShow?.pictures.map(x => <>
                            <img className="h-full object-cover w-full hover:scale-105 transition-all" key={x} src={x} alt={selectedTvShow?.name} />
                        </>)
                    }
                </div>
            </div>
            {/* PELIS REEL */}
            <div className="max-w-[90vw] mx-auto relative -top-20 flex ">
                <div className="absolute start-0 bg-amber-300 h-full z-50" onClick={e => {
                    const container = document.getElementById("carousel");
                    container?.scroll(container?.scrollLeft - 300,0);
                }}>
                    ANTERIOR
                </div>
                <div id="carousel" className="flex overflow-x-auto h-fit gap-10 py-10 relative px-10">
                    {tvShows?.map(x => <>
                        <div onClick={e => setidSelectedTvShow(x.id)} className="max-h-73 min-h-64 w-52 aspect-9/16 flex flex-col">
                            <img className={`object-fit rounded-sm h-full transition-all border relative border-gray-300 ${idSelectedTvShow == x.id && "scale-105 top-[-10px]"}`} src={x.image_thumbnail_path} alt="" />
                            <p className="text-nowrap overflow-hidden whitespace-nowrap max-w-full text-ellipsis m-1 font-bold">{x.name}</p>
                        </div>
                    </>)}
                </div>
                <div className="absolute end-0" onClick={e => {
                    const container = document.getElementById("carousel");
                    container?.scroll(container?.scrollLeft + 300,0);
                }}>
                    POSTERIOR
                </div>
            </div>
        </div>
    </>
};