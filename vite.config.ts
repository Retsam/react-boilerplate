import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// @ts-ignore - don't want to install @types/node just for this line
import * as dns from "dns";

// Gets vite to suggest localhost not 127.0.0.1 urls
dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
