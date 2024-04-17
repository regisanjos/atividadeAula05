
const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000; //colocar a porta correta aqui 

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});