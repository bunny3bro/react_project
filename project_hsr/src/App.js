import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Home from './home';
import Chard from './chard';
import Posts from './posts';
import Team from './team';
import Chara from './char';

function App() {

  const cursor = document.getElementsByClassName('cursor');

  document.addEventListener('mousemove', e => {
    cursor[0].setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
  });

  document.addEventListener('click', e => {
    cursor[0].classList.add("expand");
    setTimeout(() => {
        cursor[0].classList.remove("expand");
    }, 500);
  });

  return (
    <div className="App">
      <div className="cursor"></div>
      <br />
      <h1 className='animated-heading' >
        Welcome to Honaki Star Rail
      </h1>
      <br />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chard" element={<Chard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/char" element={<Chara />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

