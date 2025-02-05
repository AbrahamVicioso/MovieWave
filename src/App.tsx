import { useEffect, useState } from 'react';
import './App.css'
import BannerMovies from "./Sections/BannerMovies.tsx";
import ITvShow from './Models/ITvShow.tsx';
import { GetTvShows } from './Services/ApiService.tsx';

function App() {
  const [tvShows,setTvShows] = useState<ITvShow[]>();

  useEffect(function(){
    const getData = async function(){
      const data = await GetTvShows(2);
      setTvShows(data);
    }

    getData();
  },[]);

  return (
    <>
      {tvShows != undefined && <>
        <nav className="flex justify-around items-center py-5 border-b-1 border-gray-200 absolute w-full bg-white top-0">
          <div>
              <h2 style={{"color": "#F14A00"}} className='font-bold text-2xl'>MovieWave</h2>
          </div>
          <div>
              <ul className='flex gap-5 font-semibold'>
                  <li><a style={{"color": "#F14A00"}} href="">Home</a></li>
                  <li><a href="">TV Shows</a></li>
                  <li><a href="">Movies</a></li>
                  <li><a href="">Upcoming</a></li>
              </ul>
          </div>
          <div>
            Account
          </div>
        </nav>
        <div className='mt-10'>
          <BannerMovies tvShows={tvShows}/>
        </div>
      </>
      }
    </>
  )
}

export default App
