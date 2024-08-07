import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Remote 1 App",
  },
  server: {
    port: 3001,
  },
  moduleFederation: {
    options: mfConfig,
  },
});
