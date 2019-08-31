const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get('/p/:id', (req, res) => {
    const id = req.params.id;
    // id goes to the query in post.js
    app.render(req, res, '/post', { id });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, error => {
    if (error) throw error;
    console.log('Server running on port 3000');
  });
});
