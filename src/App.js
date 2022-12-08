import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './companents/navbar';
import Gallary from './page/galary';
import Home from "./page/home"
import News from "./page/news"
import Contact  from "./page/contact"
 function App() {

  return (
    <div>
     <Navbar/>
     <Home/>
     <News/>
     <Gallary/>
     <Contact/>
    </div>
  );
}

export default App;
