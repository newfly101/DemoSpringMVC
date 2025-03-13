package com.daybreak.SpringMVCDemo.basic.request;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.Enumeration;

/**
 * 1. 파라미터 전송 기능
 * http://localhost:8080/request-param?username=hello&age=20
 *
 */
@Slf4j
@WebServlet(name="requestParamServlet", urlPatterns = "/request-param")
public class RequestParamServlet extends HttpServlet {
    String className = "RequestParamServlet";

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.debug("[{}].service 실행", className);
        String checkMethod = request.getMethod();
        log.debug("[{}] -> [{}]", className, checkMethod);


        log.debug("[RequestParamServlet] 전체 파라미터 조회 - start");
        request.getParameterNames().asIterator().forEachRemaining(name -> {
            log.debug("[{}] {} = {}",className, name,request.getParameter(name));
        });
        log.debug("[RequestParamServlet] 전체 파라미터 조회 - end");
        
        log.debug("[{}] 이름이 같은 복수 parameter 조회 - start", className);
        String[] usernames = request.getParameterValues("username");
        if (usernames != null) {
            for (String username : usernames) {
                log.debug("[{}] {}",className, username);
            }
        }


        // 클라이언트(브라우저 또는 API 요청을 보낸 곳)에서 응답을 받으면 **"ok"**라는 문자열이 표시됨.
//        response.getWriter().write("ok");
    }
}
