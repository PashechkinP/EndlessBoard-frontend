import React, { useState } from 'react'
import Registration from './registration.js';
import Header from './Header.js';
import AdCard from './adCard.js';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { Button } from '@mui/material';


function HomePage() {


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

            <Header isLoggedIn={true} />
            
            <Grid container justifyContent="center" spacing={5} marginTop={1}>

                {showingPosts}
                
            </Grid>
        </div>
    );
}
export default HomePage;