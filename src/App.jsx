// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Advertise from './Advertise';
import Header from './Header';
import Home from './Home';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
