import clsx from "clsx";
import SeparatorWithText from "./divider";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Circle, Ellipsis, Moon } from "lucide-react";

export default function SideBar({ className }: { className?: string }) {
  return (
    <div className={clsx(className, " bg-chat-secondary rounded-md relative")}>
      {/* active user feed  */}
      <div className="mt-4 px-4">
        <SeparatorWithText
          text="Active Users"
          className="text-white font-bold font-heebo text-center"
        />

        <div className="flex flex-col gap-12  mt-12">
          {[
            {
              name: "Ankit Kashyap",
              profile:
                "https://avatars.githubusercontent.com/u/121277178?s=400&u=fc26fbdcddca7302469d500a58ebd4ccfa324951&v=4",
              status: "active",
            },
            {
              name: "Ankit Kashyap",
              profile: "",
              status: "inactive",
            },
            {
              name: "Ankit Kashyap",
              profile:
                "https://avatars.githubusercontent.com/u/121277178?s=400&u=fc26fbdcddca7302469d500a58ebd4ccfa324951&v=4",
              status: "inactive",
            },
          ].map((e, i) => {
            return (
              <div
                key={i}
                className="flex gap-2 text-gray-400 font-light items-center font-heebo"
              >
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src={
                        e.profile ? e.profile : "https://github.com/shadcn.png"
                      }
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                  {e.status === "active" ? (
                    <Circle className="fill-green-500 absolute w-[13px] -bottom-2 left-5" />
                  ) : (
                    <Moon className="fill-yellow-500 absolute w-[13px] -bottom-2 left-5" />
                  )}
                </div>

                <p>{e.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* fixed footer for social  */}
      <div className="flex justify-between bg-chat-inactive p-4 absolute bottom-16  w-full">
        <div className="relative">
          <Avatar>
            <AvatarImage src={"https://github.com/shadcn.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Circle className="fill-green-500 absolute w-[13px] -bottom-2 left-5" />
        </div>

        <p className="text-gray-400 font-bold">Ankit Kashyap</p>

        <Ellipsis className="text-white cursor-pointer" />
      </div>
    </div>
  );
}
