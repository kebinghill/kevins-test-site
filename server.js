const express = require('express');
const app = express();
const { static } = express;
const path = require('path');

const { syncAndSeed } = require('./db');
app.use(express.json());

app.use('/dist', static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, console.log(`listening on port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();

module.exports = app;
