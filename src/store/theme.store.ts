import type { ThemeState } from "@interfaces/ThemeType";
import { createStore } from "zustand/vanilla";

const themeStore = createStore<ThemeState>((set) => ({
  theme: "light",
  setTheme: (theme) => {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.classList.remove(state.theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      const event = new Event("themeChange");
      window.dispatchEvent(event);
      return { theme: newTheme };
    }),
}));

export default themeStore;
