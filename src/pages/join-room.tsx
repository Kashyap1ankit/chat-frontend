import { SendHorizonal } from "lucide-react";

export default function JoinRoom() {
  return (
    <div className="relative bg-chat-primary rounded-md w-full ">
      <div className="min-h-screen">hello world</div>

      <form className="w-full p-2 rounded-md bg-chat-inpt flex justify-between absolute bottom-16">
        <input
          placeholder="Send a message"
          className="w-full py-2 outline-0 border-0 text-white text-sm"
        />

        <button>
          <SendHorizonal className="text-gray-400  font-bold cursor-pointer" />
        </button>
      </form>
    </div>
  );
}
