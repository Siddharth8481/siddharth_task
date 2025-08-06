module.exports = (io, socket) => {
  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message); // Broadcast to all connected clients
  });

  socket.on("createRoom", async (data) => {
    let { user_id, other_user_id } = data;

    try {
      let find_user_id = await Users.findOne({ _id: user_id });

      if (!find_user_id) {
        return errorResponse(res, 409, "User_id not found ");
      }
      let find_Otheruser_id = await Users.findOne({ _id: other_user_id });
      if (!find_Otheruser_id) {
        return errorResponse(res, 409, "find_Otheruser_id not found ");
      }

      let find_room = await chatRoom.findOne({
        $or: [
          {
            user_id: other_user_id,
            other_user_id: user_id,
          },
          { user_id: other_user_id, other_user_id: user_id },
        ],
      });

      if (find_room) {
        socket.emit("createRoom", createRoom);
        return successResponse(
          res,
          "Room already created successfully",
          create_user
        );
      } else {
        let create_room = await chatRoom.create({
          user_id: user_id,
          other_user_id: other_user_id,
        });

        if (create_room) {
          socket.emit("createRoom", create_user);
          return successResponse(res, "Room created successfully", create_user);
        }
      }
    } catch (error) {
      console.log("error", error);
      return errorResponse(res, 500, "Internal sever error");
    }
  });

  // Add more chat-related event listeners here
};
