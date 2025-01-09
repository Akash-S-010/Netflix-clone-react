import React, { useEffect } from "react";
import { useState } from "react";
import "./Player.css";
import back_arrow from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

function Player() {

  const {id} = useParams()
  const navigate = useNavigate()

  const [videoData, setVideoDta] = useState({
    name : "", 
    type : "",
    key:"",
    published_at:"",
    typeof:""

  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjQ5ZTQxMzZkMTA5OWEyZWE1MGI2M2U3Yjk3NjgyNCIsIm5iZiI6MTczNjI0NzM5NS4yOTc5OTk5LCJzdWIiOiI2NzdkMDg2MzVjNzM4ZTFjMjI2NjhmNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7D3vJEsorSgfc-d_87e7GjOvRg9Rqmxen3pASRTYawA'
    }
  };

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVideoDta(res.results[0]))
    .catch(err => console.error("Error fetching video data:",err));
  },[])
  
  

  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=>{navigate('/')}}/>
      <iframe
        width="80%"
        height="80%"
        src={`https://www.youtube.com/embed/${videoData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{videoData.published_at}</p>
        <p>{videoData.name}</p>
        <p>{videoData.type}</p>
      </div>
    </div>
  );
}

export default Player;
