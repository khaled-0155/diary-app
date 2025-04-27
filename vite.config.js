import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.png"],
      manifest: {
        name: "Beyond Wildlife diary",
        short_name: "Diary",
        description:
          "Beyond Wildlife diary app lets nature lovers, researchers, and eco-conscious users log wildlife experiences and conservation efforts, created to address the lack of similar tools.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/logo.png",
            sizes: "64x64",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
