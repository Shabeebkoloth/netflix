import React, { useEffect, useState, useRef } from 'react';
import './TitleCards.css';

const TitleCards = ({title,category}) => {
  const [apiData, setApiData] = useState([]);
const  cardsRef =useRef();
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODg0ZTIzNjhmNzkwYmE2NmE5YjcwMThkZmFiY2Q0NSIsIm5iZiI6MTc0OTk2NDgxOS4zNjMwMDAyLCJzdWIiOiI2ODRlNTgxM2EwYzZlNTA0MWViYjRmMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qq7bo-VYJKktKDvZ5pI7Z6te2TUB2QoW_svc9p1_fAQ'
  }
};
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title:"Trending"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
           return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  );
};

export default TitleCards;
