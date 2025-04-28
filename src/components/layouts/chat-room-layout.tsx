import { Outlet } from "react-router-dom";
import SideBar from "../side-bar";

export default function ChatRoomLayout() {
  return (
    <div className="flex justify-start gap-2 min-h-screen  ">
      <SideBar className="w-1/6" />

      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
}
