import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App(){
      return (      
         <BrowserRouter>
          <div>
          <Navbar />
            <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
          </div> 
        </BrowserRouter>
      );
  }
   
  export default App;

