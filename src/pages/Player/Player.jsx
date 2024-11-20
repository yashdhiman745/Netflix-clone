import React, { useEffect, useState } from "react";
import "./player.css";
import backarrow from "../../netflix_react_assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  let {id}=useParams();
  let navi=useNavigate()
  const [apidata,setapidata]=useState({
    name:"",
    key:"",
    typeof:"",
    published_at:""
  })
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDQ1ZDIwNzMzYTk3ZmYzNjZhYmJiNjg5MmI2YTViNSIsIm5iZiI6MTcyOTE0MDY0MC4zNTE1NTUsInN1YiI6IjY3MTA5NWRmZGI3OWM5Y2VhZTBlZDBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cECz1qYAEJIHs1RMCZfhQIci_o5d3hYjgucMGU8LSkQ",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setapidata(response.results[0]))//as we want the object present at first or 0th index
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="player">
      <img onClick={()=>navi("/")} src={backarrow} alt="" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        allowFullScreen
        title="trailer"
        frameborder="0"
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  );
};

export default Player;
