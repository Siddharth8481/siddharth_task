const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const { Server } = require("socket.io");
require("./database/connections");
const express = require("express");
const http = require("http");
const setupSocketEvents = require("./socket/index");
const approute = require("./api/routes/index.routes");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(cors());
app.use(express.json());

app.use("/app", approute);
setupSocketEvents(io);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.json({ message: "test api" });
});
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
