import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Global/Header.jsx"
import HomePage from "./HomePage/Body.jsx";
import AuthenticationPage from "./AuthenticationPage/Body.jsx";
import PropertySearchPage from "./PropertySearchPage/Body.jsx";

const Body = () => {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/authenticationpage" element={<AuthenticationPage />} />
        <Route path="/propertysearchpage" element={<PropertySearchPage />} />
            </Routes>
        </Router>
    );
};

export default Body;