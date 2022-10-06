import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.debug("mode", mode);
  return {
    plugins: [svelte()],
    base: mode === "pages" ? "/cpf-generator/" : "",
  };
});
