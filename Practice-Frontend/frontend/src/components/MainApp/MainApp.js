import React, { useState, } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navigation from '../Screens/Navigation';
import Home from '../Screens/Home';
import Sample from '../Screens/Sample';
import Search from '../Screens/Search';
import NotFound from '../Screens/NotFound';

import BackendTest from '../Screens/BackendTest';


export default function MainApp() {
    return (
        <Router>
            <div style={{backgroundColor: '#000', minHeight: '100vh', color: '#ffffff'}}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/test" element={<BackendTest />} /> {/* backend data testing */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );

}