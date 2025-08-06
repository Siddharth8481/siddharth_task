module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Import and call other socket event modules here
    let chat = require("./chat")(io, socket);

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
