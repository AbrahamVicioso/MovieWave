import { useEffect, useState } from 'react';
import './App.css'
import BannerMovies from "./Sections/BannerMovies.tsx";
import ITvShow from './Models/ITvShow.tsx';
import { GetTvShows } from './Services/ApiService.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import SearchPage from './Pages/SearchPage.tsx';
import {FaSearch} from "react-icons/fa";
import TvShowDetail from './Pages/TvShowDetail.tsx';
import HomePage from './Pages/HomePage.tsx';

function App() {
  const [tvShows,setTvShows] = useState<ITvShow[]>();

  useEffect(function(){
    const getData = async function(){
      const [data,pages] = await GetTvShows(2);
      setTvShows(data);
    }

    getData();
  },[]);

  return (
    <>
      {tvShows != undefined && <>
        <nav className="flex justify-around items-center py-5 border-b-1 border-gray-200 absolute w-full bg-white top-0">
          <div>
              <a href="/"><h2 style={{"color": "#F14A00"}} className='font-bold text-2xl'>MovieWave</h2></a>
          </div>
          <div>
              <ul className='flex gap-5 font-semibold'>
                  <li><a style={{"color": "#F14A00"}} href="">Home</a></li>
                  <li><a href="">TV Shows</a></li>
                  <li><a href="">Movies</a></li>
                  <li><a href="">Upcoming</a></li>
              </ul>
          </div>
          <div className='relative'>
            <input
            className='outline-none border border-e-0 border-gray-300 rounded-s-full px-3 py-1 ' 
            type="text" placeholder='Search' />
            <button className='absolute border border-s-0 border-gray-300 h-full px-3 rounded-e-full'>
              <FaSearch className='text-gray-400'/>
            </button>
          </div>
        </nav>
        <div className='mt-20'>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage/>}/>
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='tvshow/:tvShowId' element={<TvShowDetail/>}/>
            </Routes>
          </BrowserRouter>
          
        </div>
      </>
      }
    </>
  )
}

export default App
