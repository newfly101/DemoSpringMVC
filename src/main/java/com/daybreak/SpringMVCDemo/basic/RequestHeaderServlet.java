package com.daybreak.SpringMVCDemo.basic;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
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
        printHeaderUtils(request);
        printEtc(request);
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
        // 옛날 방식
//        Enumeration<String> headerNames = request.getHeaderNames();
//        while (headerNames.hasMoreElements()) {
//            String headerName = headerNames.nextElement();
//            System.out.println(headerName + " : " + headerName);
//        }
        // 최근 방식
        request.getHeaderNames().asIterator()
                .forEachRemaining(headerName -> System.out.println(headerName + ": " + headerName));

        request.getHeader("host");

        System.out.println("--- Headers - End ---");
        System.out.println();
    }
    private void printHeaderUtils(HttpServletRequest request) {
        System.out.println("--- HeaderUtils - Start ---");
        System.out.println("[Host 편의 조회]");
        System.out.println("request.getServerName() = " + request.getServerName());
        System.out.println("request.getServerPort() = " + request.getServerPort());
        System.out.println();

        System.out.println("[Accept-Language 편의 조회]");
        request.getLocales().asIterator()
                        .forEachRemaining(locale -> System.out.println("locale = " + locale));
        System.out.println("request.getLocale() = " + request.getLocale());
        System.out.println();

        System.out.println("[cookie 편의 조회]");
        if(request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                System.out.println(cookie.getName() + " : " + cookie.getValue());
            }
        }
        System.out.println();

        System.out.println("[Content 편의 조회]");
        System.out.println("request.getContentType() = " + request.getContentType());
        System.out.println("request.getContentLength() = " + request.getContentLength());
        System.out.println("request.getCharacterEncoding() = " + request.getCharacterEncoding());

        System.out.println("--- HeaderUtils - End ---");
    }

    private void printEtc(HttpServletRequest request) {
        System.out.println("--- Etc - Start ---");
        System.out.println("[Remote 정보]");
        System.out.println("request.getRemoteHost() = " + request.getRemoteHost());
        System.out.println("request.getRemoteAddr() = " + request.getRemoteAddr());
        System.out.println("request.getRemotePort() = " + request.getRemotePort());
        System.out.println();

        System.out.println("[Locale 정보]");
        System.out.println("request.getLocalName() = " + request.getLocalName());
        System.out.println("request.getLocalAddr() = " + request.getLocalAddr());
        System.out.println("request.getLocalPort() = " + request.getLocalPort());
        System.out.println();
        System.out.println("--- Etc - End ---");
    }
}
