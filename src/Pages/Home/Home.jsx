import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../Component/Navbar/Navbar';
import Play_icon from '../../assets/play_icon.png';
import Info_icon from '../../assets/info_icon.png';
import TitleCards from '../../Component/TitleCards/TitleCards';

const Home = () => {
  const [bannerMovie, setBannerMovie] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODg0ZTIzNjhmNzkwYmE2NmE5YjcwMThkZmFiY2Q0NSIsIm5iZiI6MTc0OTk2NDgxOS4zNjMwMDAyLCJzdWIiOiI2ODRlNTgxM2EwYzZlNTA0MWViYjRmMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qq7bo-VYJKktKDvZ5pI7Z6te2TUB2QoW_svc9p1_fAQ'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      .then(res => res.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          setBannerMovie(data.results[0]); // Set first trending movie
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        {bannerMovie && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}`}
              alt={bannerMovie.title}
              className='banner-img'
            />
            <div className="caption">
              <h1 className='caption-img'>{bannerMovie.title}</h1>
              <p>{bannerMovie.overview}</p>
              <div className="btns">
                <button className='btn'>Play <img src={Play_icon} alt="Play" /></button>
                <button className='btn dark-btn'>More info <img src={Info_icon} alt="Info" /></button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="more-cards">
        <TitleCards title={"Trending Now"} category={"now_playing"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"popular"} />
        <TitleCards title={"Top Rated"} category={"top_rated"} />
      </div>
    </div>
  );
};

export default Home;
