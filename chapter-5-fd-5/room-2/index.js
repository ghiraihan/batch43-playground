const express = require("express");
const PORT = 6789;
const server = express();
server.use(express.urlencoded());

// todo : Controller
const lihat_history = require("./controller/lihat-history");

// todo : Routing
server.get("/lihat-history", lihat_history);

server.listen(PORT, () => {
  console.log("🚀 ~ server.listen ~ PORT:", PORT);
});