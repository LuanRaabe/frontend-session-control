const express = require('express');
const app = express();
const port = 8080;

app.use('/section', express.static("./src/section"));

app.listen(port, () => console.log(`Frontend app listening at http://localhost:${port}`));