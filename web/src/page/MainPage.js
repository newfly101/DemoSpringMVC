import React from 'react';
import {Link} from "react-router";

const MainPage = () => {
    return (
        <ul>
            <li><Link to="/basic">서블릿 basic</Link></li>
        </ul>
    );
};

export default MainPage;
