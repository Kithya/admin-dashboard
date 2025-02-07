import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Set your desired port number
    strictPort: true, // Prevents Vite from switching to another port
  },
});
