import { create } from "zustand";

interface UserState {
  phone: string;
  name: string;
  nickname: string;
  password: string;
  setUser: (user: Partial<UserState>) => void;
  resetUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  phone: "",
  name: "",
  nickname: "",
  password: "",
  setUser: (user) => set((state) => ({ ...state, ...user })),
  resetUser: () =>
    set({
      phone: "",
      name: "",
      nickname: "",
      password: "",
    }),
}));
