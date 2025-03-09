import React from 'react';
import {useNavigate} from "react-router";
import styles from "../css/global/index.scss";

const MainPage = () => {
    const navigate = useNavigate();
    const handleNavigateTo = (url) => {
        navigate(url)
    }
    return (
        <>
            <h3 className={styles.headlineHover}>서블릿 베이직</h3>
            <button className={styles.linkTag} onClick={()=> handleNavigateTo("/basic")}>
                서블릿 basic
            </button>
        </>
    );
};

export default MainPage;
