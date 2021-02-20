const express = require('express');
const app = express();
const port = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use(require('./route/index'));

app.listen(port);
console.log(`Server on port ${port}`);