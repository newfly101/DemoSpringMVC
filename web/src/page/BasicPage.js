import React from 'react';
import {useNavigate} from "react-router";
import styles from "../css/global/index.module.scss";

const BasicPage = () => {
    const navigate = useNavigate();
    const handleNavigateTo = (url) => {
        navigate(url)
    }
    return (
        <div className={styles.container}>
            <button className={styles.linkTag} onClick={() => handleNavigateTo("/")}>
                메인으로 가기
            </button>
            <div className={styles.lessonTable}>
                <h3>hello 서블릿 호출</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag} onClick={() => handleNavigateTo("/hello?username=servlet")}>
                        페이지 요청
                    </button>
                    <label htmlFor="request1"> URI : </label>
                    <input id="request1" type="text" disabled value="/hello?username=servlet"/>
                </div>
            </div>
            <h2>HttpServletRequest</h2>
            <div className={styles.lessonTable}>
                <h3>기본 사용법, Header 조회</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag} onClick={() => handleNavigateTo("/request-header")}>
                        페이지 요청
                    </button>
                    <label htmlFor="request2"> URI : </label>
                    <input id="request2" type="text" disabled value="/request-header"/>
                </div>
            </div>
            <div className={styles.lessonTable}>
                <h3>Http 요청 메세지 바디 조회 (GET)</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}
                            onClick={() => handleNavigateTo("/request-param?username=hello&age=20")}>
                        페이지 요청
                    </button>
                    <label htmlFor="request3"> URI : </label>
                    <input id="request3" type="text" disabled value="/request-param?username=hello&age=20"/>
                </div>
            </div>
            <div className={styles.lessonTable}>
                <h3>Http 요청 메세지 바디 조회 (POST)</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}
                            onClick={() => handleNavigateTo("/basic/hello-form.html")}>
                        페이지 요청
                    </button>
                    <label htmlFor="request4"> URI : </label>
                    <input id="request4" type="text" disabled value="/basic/hello-form.html"/>
                </div>
            </div>
            <div className={styles.lessonTable}>
                <h3>Http 요청 메세지 바디 조회 (HTTP API)</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}>
                        {/*onClick={() => handleNavigateTo("/basic/hello-form.html")}>*/}
                        TEST
                    </button>
                    <label htmlFor="request4"> URI : </label>
                    <input id="request4" type="text" disabled value="POSTMAN TEST"/>
                </div>
            </div>
            <h2>HttpServletResponse</h2>
            <div className={styles.lessonTable}>
                <h3>기본 사용법, Header 조회</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}
                            onClick={() => handleNavigateTo("/request-header")}>
                        페이지 요청
                    </button>
                    <label htmlFor="response1"> URI : </label>
                    <input id="response1" type="text" disabled value="/request-header"/>
                </div>
            </div>
            <div className={styles.lessonTable}>
                <h3>HTML 응답</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}
                            onClick={() => handleNavigateTo("/response-html")}>
                        페이지 요청
                    </button>
                    <label htmlFor="response1"> URI : </label>
                    <input id="response1" type="text" disabled value="/response-html"/>
                </div>
            </div>
            <div className={styles.lessonTable}>
                <h3>HTML API JSON 응답</h3>
                <div className={styles.tableDetail}>
                    <button className={styles.linkTag}
                            onClick={() => handleNavigateTo("/response-json")}>
                        페이지 요청
                    </button>
                    <label htmlFor="response1"> URI : </label>
                    <input id="response1" type="text" disabled value="/response-json"/>
                </div>
            </div>
        </div>
    );
};

export default BasicPage;
