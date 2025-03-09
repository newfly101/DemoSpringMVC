module.exports = {
    devServer: {
        proxy: {
            '/': "http://localhost:3080",
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "resolve-url-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"), // 최신 Dart Sass 사용
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};
