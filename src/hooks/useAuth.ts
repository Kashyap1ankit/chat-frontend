import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useUserStore } from "../store/store";

export function useAuth() {
  const { setCurrentUser } = useUserStore();

  const { isPending, isError, data } = useQuery({
    queryKey: ["isLoggedIn"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/auth/verify`,
          {
            withCredentials: true,
          }
        );
        setCurrentUser(res.data.user);
        if (res.status !== 200) throw new Error();

        return {
          data: res.data.user,
          status: res.status,
        };
      } catch {
        return {
          data: null,
          status: 400,
        };
      }
    },
  });

  return {
    isPending,
    isError,
    data,
  };
}
