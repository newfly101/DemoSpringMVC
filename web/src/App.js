import MainPage from "./page/MainPage";
import React from "react";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router";
import BasicPage from "./page/BasicPage";
import RequestHeader from "./page/components/RequestHeader";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/basic" element={<BasicPage/>}/>
                <Route path="/request-header" element={<RequestHeader/>}/>
            </Routes>
        </Router>
    );
}

export default App;
