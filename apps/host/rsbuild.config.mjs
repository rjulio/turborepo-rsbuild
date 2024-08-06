import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { mfConfig } from "./module-federation.config";

const { publicVars } = loadEnv({ prefixes: ["PUBLIC_"] });

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: {
      "import.meta.env.PUBLIC_REMOTE_1": JSON.stringify(
        import.meta.env.PUBLIC_REMOTE_1,
      ),
      "import.meta.env.PUBLIC_REMOTE_2": JSON.stringify(
        import.meta.env.PUBLIC_REMOTE_2,
      ),
      "import.meta.env.PUBLIC_HOST": JSON.stringify(
        import.meta.env.PUBLIC_HOST,
      ),
    },
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
