import React, {useState} from 'react';
import {useNavigate} from "react-router";
import styles from "../css/global/index.module.scss";
import axios from "axios";

const PAGE_JSON_DATA = [
    {
        index: 1,
        id: "servletRequest",
        name: "hello 서블릿 호출",
        reqURI: "/hello?username=servlet",
        reqName: "페이지 요청"
    },
    {
        index: 2,
        id: "servletRequest-1",
        name: "기본 사용법, Header 조회",
        reqURI: "/request-header",
        reqName: "페이지 요청"

    },
    {
        index: 3,
        id: "servletRequest-2",
        name: "Http 요청 메세지 바디 조회 (GET)",
        reqURI: "/request-param?username=hello&age=20",
        reqName: "페이지 요청"

    },
    {
        index: 3,
        id: "servletRequest-2",
        name: "Http 요청 메세지 바디 복수 조회 (GET)",
        reqURI: "/request-param?username=hello&age=20&username=hello2",
        reqName: "페이지 요청",
        tooltip: "메세지 key의 이름이 같은 것이 여러개 들어오는 경우"

    },
    {
        index: 4,
        id: "servletRequest-3",
        name: "Http 요청 메세지 바디 조회 (POST)",
        reqURI: "/basic/hello-form.html",
        reqName: "페이지 요청"

    },
    {
        index: 5,
        id: "servletRequest-4",
        name: "Http 요청 메세지 바디 조회 (HTTP API)",
        reqURI: "POSTMAN TEST",
        reqName: "따로 테스트"

    },
    {
        index: 6,
        id: "servletResponse-1",
        name: "기본 사용법, Header 조회",
        reqURI: "/request-header",
        reqName: "페이지 요청"
    },
    {
        index: 7,
        id: "servletResponse-2",
        name: "HTML 응답",
        reqURI: "/response-html",
        reqName: "페이지 요청"
    },
    {
        index: 8,
        id: "servletResponse-3",
        name: "HTML API JSON 응답",
        reqURI: "/response-json",
        reqName: "페이지 요청"
    }

]

const BasicPage = () => {
    const navigate = useNavigate();
    const handleNavigateTo = (url) => {
        axios.get("http://localhost:8080" + url)
            .then(response => {
                console.log(response.data);
                navigate("/basic");
                window.location.reload();
            })
            .catch(error => console.error("Error:", error));
    }
    const [data, _setData] = useState(PAGE_JSON_DATA);

    return (
        <div className={styles.container}>
            <button className={styles.linkTag} onClick={() => navigate("/")}>
                메인으로 가기
            </button>
            {data
                .filter((item) => item.index === 1)
                .map((item) => (
                    <div className={styles.lessonTable} key={item.index}>
                        <h3>{item.name}</h3>
                        <div className={styles.tableDetail}>
                            <button className={styles.linkTag} onClick={() => handleNavigateTo(item.reqURI)}>
                                {item.reqName}
                            </button>
                            <label htmlFor={item.id}> URI : </label>
                            <input id={item.id} type="text" disabled value={item.reqURI}/>
                        </div>
                    </div>
                ))}
            <h2>HttpServletRequest</h2>
            {data
                .filter((item) => item.index >= 2 && item.index <= 5)
                .map((item) => (
                    <div className={styles.lessonTable} key={item.index}>
                        <div className={styles.tootipBox}>
                            <h3>{item.name}</h3>
                            {item.tooltip && <span className={styles.tooltip}>{item.tooltip}</span>}
                        </div>
                        <div className={styles.tableDetail}>
                            <button className={styles.linkTag} onClick={() => handleNavigateTo(item.reqURI)}>
                                {item.reqName}
                            </button>
                            <label htmlFor={item.id}> URI : </label>
                            <input id={item.id} type="text" disabled value={item.reqURI}/>
                        </div>
                    </div>
                ))}
            <h2>HttpServletResponse</h2>
            {data
                .filter((item) => item.index >= 6)
                .map((item) => (
                    <div className={styles.lessonTable} key={item.index}>
                        <h3>{item.name}</h3>
                        <div className={styles.tableDetail}>
                            <button className={styles.linkTag} onClick={() => handleNavigateTo(item.reqURI)}>
                                {item.reqName}
                            </button>
                            <label htmlFor={item.id}> URI : </label>
                            <input id={item.id} type="text" disabled value={item.reqURI}/>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default BasicPage;
