// require("@babel/polyfill");
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },  
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },  
        ]
    },
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },
}