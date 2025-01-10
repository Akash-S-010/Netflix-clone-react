import React, { useEffect } from "react";
import Home from "./pages/Homepage/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Player from "./pages/MediaPlayer/Player";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./firebase"



function App() {

  const navigate = useNavigate();

    useEffect(()=>{
      onAuthStateChanged(auth, async(user)=>{
        if(user){
          console.log("logged in")
          navigate("/")
        }else{
          console.log("logged out")
          navigate("/login")
        }
      })
    },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  ); 
}

export default App;
