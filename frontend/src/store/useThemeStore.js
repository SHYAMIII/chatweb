import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chattify-theme") || "valentine",
  setTheme: (theme) => {
    localStorage.setItem("Chattify-theme", theme);
    set({ theme });
  },
}));
