import { Dispatch, SetStateAction } from "react";
import ITvShow from "../Models/ITvShow"

interface TvShowCardProps {
    tvShow: ITvShow,
    handleSelectTvShow: Dispatch<SetStateAction<number | undefined>>
}

export default function TvShowCard({tvShow, handleSelectTvShow} : TvShowCardProps){
    return <>
        <div onClick={x => {
            x.defaultPrevented;
            handleSelectTvShow(tvShow.id)
        }} className="">
            <img className="" src={tvShow.image_thumbnail_path} alt={tvShow.name} />
            {/* <p className="font-bold">{tvShow.name}</p> */}
        </div>
    </>
}