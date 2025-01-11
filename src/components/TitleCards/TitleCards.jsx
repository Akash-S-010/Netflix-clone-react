import React, { useEffect } from 'react'
import './TitleCards.css'
import { useState } from 'react';
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

function TitleCards({title, category}) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
    }
  };

  const [apiData, setApiData] = useState([]);

  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    document.querySelector('.card-list').scrollLeft += 1000;
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card,index)=>{
          return<Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="card img "className='card-img' />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
