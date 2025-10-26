import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://app-dost-amber.vercel.app/", // or your frontend URL
    methods: ["GET", "POST"],
    credentials: true,
  }
});

let activeUsers = 0;

// When a user connects
io.on("connection", (socket) => {
  activeUsers++;
  io.emit("updateUserCount", activeUsers);

  console.log(`User connected. Active: ${activeUsers}`);

  socket.on("disconnect", () => {
    activeUsers--;
    io.emit("updateUserCount", activeUsers);
    console.log(`User disconnected. Active: ${activeUsers}`);
  });
});

app.get("/", (req, res) => {
  res.send("Server running...");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
