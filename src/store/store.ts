import { create } from "zustand";
import { currentUserType, userStoreType } from "../types/store.type";

export const useUserStore = create<userStoreType>()((set) => ({
  currentUser: null,

  setCurrentUser: (value: currentUserType) =>
    set(() => ({ currentUser: value })),
}));
