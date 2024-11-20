import React, { useEffect } from 'react'
import './App.css'
import { lazy,Suspense } from 'react';
const Home=lazy(()=>import("./pages/Home/Home"))
// import Home from "./pages/Home/Home"
import { Route, Routes, useNavigate } from 'react-router-dom';
const Login=lazy(()=>import('./pages/Login/Login'))
// import Login from './pages/Login/Login';
const Player=lazy(()=>import('./pages/Player/Player'))
// import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const navg=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged in");
        navg('/')
      }
      else{
        console.log("logged out");
        navg('/login')
      }
    })
  },[])
return(
  <div>
    <Suspense fallback={<h1>Loading...</h1>}>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
    </Suspense>
  </div>
);

}

export default App


