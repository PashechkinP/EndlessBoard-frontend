import React, { createContext, useState } from 'react'
import './App.css'
import Registration from './components/registration';
import {Routes,Route} from 'react-router';
import NewPosts from './components/newposts.js';
import HomePage from './components/Home.js';
import Login from './components/login.js';

function App() {


  return (

    <div>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/registration"
            element={<Registration />}
          />
          <Route path ="/login" element = {<Login/>} />
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