// src/components/ActiveUsers.jsx
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://appdost-bvek.onrender.com"); // 🔁 Replace with your backend URL

const ActiveUsers = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    socket.on("updateUserCount", (count) => {
      setUserCount(count);
    });

    return () => {
      socket.off("updateUserCount");
    };
  }, []);

return (
  <div
    className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium z-[9999]"
  >
    👥 {userCount} {userCount === 1 ? "person" : "people"} watching now
  </div>
);
};

export default ActiveUsers;
