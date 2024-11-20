import React, { useEffect, useRef, useState } from 'react'
import "./titcrds.css"
import cards_data from "../../netflix_react_assets/cards/Cards_data"
import { useNavigate } from 'react-router-dom';
                             
const Titlecards = ({title,category}) => {
  const cardsref=useRef();
  const [apidata,setapidata]=useState([]);
  const navg=useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ1ZDIwNzMzYTk3ZmYzNjZhYmJiNjg5MmI2YTViNSIsIm5iZiI6MTcyOTE0MDY0MC4zNTE1NTUsInN1YiI6IjY3MTA5NWRmZGI3OWM5Y2VhZTBlZDBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cECz1qYAEJIHs1RMCZfhQIci_o5d3hYjgucMGU8LSkQ'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results)) //results is a key name from the object coming in response
    .catch(err => console.error(err));
  },[])

  const handlewheel=(e)=>{
    // e.preventDefault();
    cardsref.current.scrollleft +=e.deltaY;
  }
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" onWheel={handlewheel} ref={cardsref}>
        {apidata.map((card,ind)=>{
          return <div className='card' key={ind} onClick={()=>navg(`/player/${card.id}`)}>
            {/* this url is copied from tmdb image url site and backdrop path is a response come from api fetch */}
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Titlecards