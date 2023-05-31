import { create } from "zustand";

interface Layout {
  title: string;
  user: {
    username: string;
    password: string;
  } | null;
  setTitle: (title: string) => void;
  login: (data: { username: string; password: string }) => void;
}

export const TitleLayout = create<Layout>((set) => ({
  title: "Coding",
  user: null,
  setTitle: (title: string) => set({ title }),
  login: async (data) => {
    const res = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await res.json();
    set({ user });
  },
}));
