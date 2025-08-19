import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: [
      "1cfe43f0-6383-4729-818a-8fa28b4a1a24-00-czpaeac4au4g.riker.replit.dev",
      "sellaro.id",
      "www.sellaro.id",
    ],
  },
});
