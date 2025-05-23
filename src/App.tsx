import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Navbar from "./components/navbar";
import MainLayout from "./components/layouts/main-layout";

import JoinRoom from "./pages/join-room";
import { useAuth } from "./hooks/useAuth";
import ChatRoomLayout from "./components/layouts/chat-room-layout";

function App() {
  useAuth();
  return (
    <div className="bg-gradient-to-r to-primary-bg from-secondary-bg min-h-screen">
      <Routes>
        <Route element={<Navbar />}>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route element={<ChatRoomLayout />}>
            <Route path="/room/new/:id" element={<JoinRoom />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
