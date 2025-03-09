import React from 'react';
import {useNavigate} from "react-router";
import styles from "../css/global/index.scss";

const BasicPage = () => {
    const navigate = useNavigate();
    const handleNavigateTo = (url) => {
        navigate(url)
    }
    return (
        <div>
            <p className={styles.headlineHover} onClick={() => handleNavigateTo("/")}> 메인으로 가기</p>
            <ul>
                <li >hello 서블릿
                    <ul>
                        <li><a href="/hello?username=servlet">hello 서블릿 호출</a></li>
                    </ul>
                </li>
                <li>HttpServletRequest
                    <ul>
                        <li><a href="/request-header">기본 사용법, Header 조회</a></li>
                        <li>Http 요청 메세지 바디 조회
                            <ul>
                                <li><a href="/request-param?username=hello&age=20">GET - 쿼리 파라미터</a></li>
                                <li><a href="/basic/hello-form.html">POST - HTML form</a></li>
                                <li>HTTP API - MESSAGEBODY -> POSTMAN TEST</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>HttpServletResponse
                    <ul>
                        <li><a href="/request-header">기본 사용법, Header 조회</a></li>
                        <li>Http 요청 메세지 바디 조회
                            <ul>
                                <li><a href="/response-html">HTML 응답</a></li>
                                <li><a href="/response-json">HTML API JSON 응답</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default BasicPage;
