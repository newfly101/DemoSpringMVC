package com.daybreak.SpringMVCDemo.basic;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.Enumeration;

@WebServlet(name = "requestHeaderServlet", urlPatterns = "/request-header")
public class RequestHeaderServlet extends HttpServlet {

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // method extract (ctrl + alt + M )
        printStartLine(request);
        printHeaders(request);
    }

    private static void printStartLine(HttpServletRequest request) {
        // START LINE
        String method = request.getMethod();
        String protocol = request.getProtocol();
        String scheme = request.getScheme();
        StringBuffer requestURL = request.getRequestURL();
        String requestURI = request.getRequestURI();
        String queryString = request.getQueryString();
        boolean secure = request.isSecure();

        System.out.println("method = " + method);
        System.out.println("protocol = " + protocol);
        System.out.println("scheme = " + scheme);
        System.out.println("requestURL = " + requestURL);
        System.out.println("requestURI = " + requestURI);
        System.out.println("queryString = " + queryString);
        System.out.println("secure = " + secure);
        System.out.println();
    }

    private void printHeaders(HttpServletRequest request) {
        System.out.println("--- Headers - Start ---");
        Enumeration<String> headerNames = request.getHeaderNames(); // 옛날 방식
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            System.out.println(headerName + " : " + headerName);
        }

        System.out.println("--- Headers - End ---");
        System.out.println();
    }
}
