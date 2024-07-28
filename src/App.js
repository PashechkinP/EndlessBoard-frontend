import React, { createContext, useState } from 'react'
import './App.css'
import Registration from './components/registration';
import {Routes,Route} from 'react-router';
import NewPosts from './components/newposts.js';
import HomePage from './components/Home.js';
import Login from './components/login.js';
import { AuthContext } from './components/AuthContext.js';

function App() {

const [isAuth, setIsAuth] = useState(false);

  return (

    <div>
      <div className="App">
        <AuthContext.Provider value={isAuth}>
        <Routes>
          <Route path="/" element={<HomePage auth={(val)=>{setIsAuth(val)}} />} />
          <Route
            path="/registration"
            element={<Registration />}
          />
          <Route path ="/login" element = {<Login auth={(val)=>{setIsAuth(val)}}/>} />
          <Route
            path="/new"
            element={<NewPosts />}
          />
        </Routes>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;