import React from 'react';

const RequestHeader = () => {
    return (
        <div>
            <li><a href="/request-header">기본 사용법, Header 조회</a></li>
            <li>Http 요청 메세지 바디 조회
                <ul>
                    <li><a href="/request-param?username=hello&age=20">GET - 쿼리 파라미터</a></li>
                    <li><a href="/basic/hello-form.html">POST - HTML form</a></li>
                    <li>HTTP API - MESSAGEBODY -> POSTMAN TEST</li>
                </ul>
            </li>
        </div>
    );
};

export default RequestHeader;
