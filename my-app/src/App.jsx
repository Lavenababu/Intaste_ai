
import './App.css';
import { Main } from "./Main/Main";
import { Results } from "./Results/Results";
import { Login } from "./Login/login";
import React from 'react';
import Home from './Home/Home';
import {BrowserRouter , Route , Routes } from 'react-router-dom'

function App() {
  
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home/>}  />
            <Route exact path='/login' element={<Login/>}  />
            <Route exact  path='/chat' element={<Main />} />
            <Route exact path='/results' element={<Results />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
