const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bootcamp-challenge.herokuapp.com/',
      changeOrigin: true,
    }),
  );
};
