const express = require("express");
const app = express();
const port = 8765;
app.listen(port, () => console.log(`Server Up and running at ${port}`));
