import { useEffect, useState } from "react";
import { useParams } from "react-router"
import ITvShow from "../Models/ITvShow";
import { GetTvShow } from "../Services/ApiService";
import {FaPlay, FaStar} from "react-icons/fa";
import { Collapse } from "antd";



export default function TvShowDetail(){
    const {tvShowId} = useParams();
    const [tvShow,setTvShow] = useState<ITvShow | undefined>();
    useEffect(() => {
        async function getTvShow(){
            const data = await GetTvShow(+tvShowId!);
            setTvShow(data);
        }
        getTvShow();
    },[tvShowId])
    return <>
        {tvShow == undefined? <p className="text-center my-10">404 not found</p>:<>
            <div className="grid grid-cols-3 h-full">
                <div className="col-start-1 col-span-1 p-10">
                    <img className="object-cover w-full" src={tvShow.image_path} alt={tvShow.name}/>
                </div>
                <div className="col-span-2 p-10">
                    <h1 className="text-2xl font-semibold">{tvShow.name}</h1>
                    <div className="flex items-center gap-3 text-amber-600">
                        <FaStar/> {Number(tvShow.rating).toFixed(1)} ({tvShow.rating_count})
                    </div>
                    <div className="flex gap-5 overflow-x-hidden">
                        {tvShow.genres.map(x => <>
                            <p>{x}</p>
                        </>)}
                    </div>
                    <div className="mt-1" dangerouslySetInnerHTML={{__html: tvShow.description}}/>
                    <h1 className="text-xl font-bold mt-5">Episodes</h1>
                    <div className="mt-5">
                        <Collapse className="max-h-52 overflow-y-auto mt-5">
                            {tvShow.episodes.map(x => <>
                                <Collapse.Panel key={x.id} header={x.name}>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <p className="font-semibold"> Season {x.season}</p>
                                        <p className="font-medium"> Date {x.air_date}</p>
                                    </div>
                                    <div className="flex">
                                        <button className="ms-auto py-1 px-10 rounded-full bg-amber-500 text-white font-medium flex justify-center items-center gap-2 cursor-pointer"><FaPlay/> Play</button>
                                    </div>
                                </div>
                                </Collapse.Panel>
                            </>)}
                        </Collapse>
                    </div>
                </div>
            </div>
        </>}
    </>
}