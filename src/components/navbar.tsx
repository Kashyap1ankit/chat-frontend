import { Link, Outlet } from "react-router-dom";

import { navItems } from "../constants";
import { navItemsArray } from "../types/general.type";
import { useUserStore } from "../store/store";

export default function Navbar() {
  const { currentUser } = useUserStore();

  return (
    <div>
      <div className="flex justify-between py-4 px-16 fixed top-0 w-full   ">
        <div>
          <p className="text-white font-bold italic text-2xl font-signika">
            ChitChat
          </p>
        </div>

        <div className="flex gap-6">
          {navItems.map((e: navItemsArray, i: number) => {
            return currentUser ? (
              e.authorizedOnly ? (
                <Link
                  key={i}
                  to={e.link}
                  className="m-auto py-2 text-xs px-8 border-2 rounded-full text-white items-center border-2 border-neutral-600 font-heebo hover:bg-white hover:text-black"
                >
                  {e.title}
                </Link>
              ) : null
            ) : !e.authorizedOnly ? (
              <Link
                key={i}
                to={e.link}
                className="m-auto py-2 text-xs px-8 border-2 rounded-full text-white items-center border-2 border-neutral-600 font-heebo hover:bg-white hover:text-black"
              >
                {e.title}
              </Link>
            ) : null;
          })}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
