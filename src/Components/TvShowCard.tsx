import { useState } from "react"
import ITvShow from "../Models/ITvShow"
import { FaPlay } from "react-icons/fa";

interface TvShowCardProps {
    tvShow: ITvShow
}

export default function TvShowCard({tvShow} : TvShowCardProps){
    const [focused,setFocused] = useState(false);

    return <>
        <div onClick={e => setFocused(!focused)} className="h-full w-full relative rounded-sm">
            
            <div className={`absolute h-full w-full bg-neutral-900 transition-all opacity-0 ${focused && "opacity-70"}`}>

            </div>
            <div className={`absolute h-full w-full opacity-0 text-white flex flex-col justify-between p-10 transition-all ${focused && "opacity-100"}`}>
                <p className="text-center">{tvShow.name}</p>

                <div className="w-full">
                    <button className="flex mx-auto justify-center items-center cursor-pointer bg-amber-600 rounded-full px-7 gap-2 py-2"><FaPlay/> Play</button>
                </div>
            </div>
            <img className="h-full w-full" src={tvShow.image_thumbnail_path} alt={tvShow.name} />
        </div>
    </>
}