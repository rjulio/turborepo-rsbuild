import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";

const { publicVars } = loadEnv({ prefixes: ["PUBLIC_"] });

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: publicVars,
  },
  html: {
    title: "Host App",
  },
  server: {
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  moduleFederation: {
    options: mfConfig,
  },
});
