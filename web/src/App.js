import MainPage from "./page/MainPage";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router";
import BasicPage from "./page/BasicPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/basic" element={<BasicPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
