const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // API 경로만 프록시 처리
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            // pathRewrite: { '^/api': '' }, // '/api' 제거하고 백엔드로 전달
        })
    );
};
