import React, { useState } from 'react'
import './App.css'
import Registration from './components/registration';
import Header from './components/Header.js';
import AdCard from './components/adCard';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import {Routes,Route} from 'react-router';
import NewPosts from './components/newposts.js';
import HomePage from './components/Home.js';


function App() {


    const [showPosts, setShowPosts] = useState([]);
    const [offset, setOffset] = useState(0);              // переменная для смещения подгрузки новых постов
    document.addEventListener("scroll", scrollListener);

    useEffect(() => {  // то что должно сделаться при первом запуске так как указано []

      let url = new URL("/api/v1/products/", "http://localhost:8000");  // конструктор URL адресов
      console.log(`Request! Offset ${offset}`)
      url.searchParams.set('offset', offset);
      let xhrFirstReq = new XMLHttpRequest();
      xhrFirstReq.open('GET', url);
      xhrFirstReq.setRequestHeader("Content-Type", "application/json")
      xhrFirstReq.responseType = 'json';
      xhrFirstReq.send();
      xhrFirstReq.onreadystatechange = function () {     // если не пашет выводить в консоль console.log
      if (xhrFirstReq.readyState != 4) return;
      let responseFirst = xhrFirstReq.response;
      console.log(responseFirst);
      setShowPosts([...showPosts, ...responseFirst]);
    }
  }, [offset]);

  function scrollListener(e) {
    console.log(`Sroll detected! ${window.scrollY + 2} ${document.body.offsetHeight - window.innerHeight}`)
    // if (window.scrollY + 2 > document.body.offsetHeight - window.innerHeight) {
    //   setOffset(offset + 25)
    // }
  }
  const showingPosts = showPosts.map((product) => <Grid item key={product.id}><AdCard adTitle={product.name} adText={product.description} adId={product.id} key={product.id} post_id={product.id}></AdCard></Grid>); // id обязательно надо для reacta

  return (

    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={<Registration />}
          />
          <Route
            path="/new"
            element={<NewPosts />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;