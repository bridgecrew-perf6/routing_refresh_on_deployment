import React from 'react'
import "./App.css"
import Main from "./Main"
import Red from "./Red"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>} />
                
            
            <Route path="/red" element={<Red/>} />
             


        </Routes>


    </Router>
  )
}

export default App