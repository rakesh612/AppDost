import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

// ✅ CORS setup for both dev and production
const allowedOrigins = [
  "https://app-dost-amber.vercel.app", // production (Vercel)
  "http://localhost:5173",             // development (Vite local)
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const server = http.createServer(app);

// ✅ Socket.io CORS (must match exactly)
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let activeUsers = 0;

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
server.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
