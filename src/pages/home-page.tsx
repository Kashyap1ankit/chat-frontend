import { Bell, Keyboard, MessagesSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const [socketUrl, setSocketUrl] = useState("ws://localhost:5000"); //eslint-disable-line

  const { sendMessage, lastMessage, getWebSocket } = useWebSocket(socketUrl); //eslint-disable-line

  const navigate = useNavigate();

  useAuth();
  useEffect(() => {
    const payload = {
      message: "establish",
      payload: {
        message: "Established",
      },
    };
    sendMessage(JSON.stringify(payload));
  }, []);

  async function handleCreateRoom() {
    const payload = {
      message: "create",
      id: uuidv4(),
      username: "Ronit",
    };

    sendMessage(JSON.stringify(payload));
  }

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data);
      if (data.id) {
        navigate(`room/join/${data.id}`);
      }
    }
  }, [lastMessage]);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-8  w-1/2">
        <div>
          <p className="font-signika text-white text-5xl font-bold">
            Chat with your friends Anytime You want
          </p>
          <p className="mt-4 text-xl text-gray-400 font-heebo">
            Start a room for focused discussions or join existing ones to chat
            and collaborate in real time
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <button
            className="border-0 px-8 py-4 text-white font-bold rounded-full bg-primary-btn flex items-center gap-2 font-heebo cursor-pointer"
            onClick={handleCreateRoom}
          >
            <MessagesSquare />
            <p>Create Room</p>
          </button>

          <form className="flex justify-between gap-6 items-center">
            <div className="flex border-2 border-neutral-700 rounded-lg px-4 py-2 gap-4">
              <Keyboard className="text-gray-400" />
              <input
                name="join-room"
                placeholder="Enter a room code"
                className="border-0 outline-0 bg-transparent font-heebo text-white"
              />
            </div>

            <button className="text-secondary-btn cursor-pointer">Join</button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center  w-1/2">
        <div className="flex gap-2 items-center bg-white rounded-full py-2 px-2 w-fit mr-[-150px] z-20 shadow-md shadow-primary-btn">
          <Bell className="bg-black rounded-full text-white p-2 w-8 h-8" />
          <p className="font-bold text-sm font-heebo">New Notification</p>
        </div>

        <img src="/hero-img-2.png" className="text-center w-[500px]" />

        <div className="flex gap-2 items-center bg-secondary-btn rounded-full py-2 px-2 w-fit ml-[-150px] z-20 shadow-md shadow-primary-btn self-end">
          <MessagesSquare className="bg-primary-btn rounded-full text-white p-2 w-8 h-8" />
          <p className="font-bold text-sm font-heebo">
            I'm loving this website
          </p>
        </div>
      </div>
    </div>
  );
}
