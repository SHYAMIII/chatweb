import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Chattify-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("Chattify-theme", theme);
    set({ theme });
  },
}));
