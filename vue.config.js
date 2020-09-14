module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 80,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewite: {
          "^/api": ""
        }
      }
    }
  }
};
