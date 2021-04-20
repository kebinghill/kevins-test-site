const express = require('express');
const app = express();
const { router } = require('./routes');
const { syncAndSeed } = require('./db');

app.use(router);

const init = () => {
  try {
    syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, console.log(`listening on port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
