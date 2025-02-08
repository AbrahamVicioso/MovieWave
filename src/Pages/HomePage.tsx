import { useEffect, useState } from "react";
import BannerMovies from "../Sections/BannerMovies";
import ITvShow from "../Models/ITvShow";
import { GetTvShows } from "../Services/ApiService";
import { Pagination } from "antd";
import TvShowCard from "../Components/TvShowCard";

export default function HomePage(){
    const [page,setPage] = useState<number>(1);
    const [pages,setPages] = useState<number>(1);
    const [tvShows,setTvShows] = useState<ITvShow[]>();

    useEffect(()=> {
        async function loadMovie(){
            const [data,pages] = await GetTvShows(page);
            setTvShows(data);
            setPages(pages!);
        } 

        loadMovie();
    },[page]);

    return<>
        {tvShows && <>
            <div className="m-10">
                <BannerMovies tvShows={tvShows}/>
                <div className="my-5 me-5">
                    <Pagination current={page} showSizeChanger={false} align="end" onChange={(newCurrent) => setPage(newCurrent)} total={pages}/>
                </div>
                <div className="grid grid-cols-5 transition-all gap-5">
                    {tvShows.map(x => <>
                        <TvShowCard tvShow={x}/>
                    </>)}
                </div>
                <div className="my-5">
                    <Pagination current={page} showSizeChanger={false} align="center" onChange={(newCurrent) => setPage(newCurrent)} total={pages}/>
                </div>
            </div>
        </>}
    </>
}