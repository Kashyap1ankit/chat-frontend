import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAuth() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["isLoggedIn"],
    queryFn: async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/verify", {
          withCredentials: true,
        });

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
