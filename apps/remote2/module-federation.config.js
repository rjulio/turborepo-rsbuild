import { dependencies } from "./package.json";

const PUBLIC_HOST =
  process.env.PUBLIC_HOST || "https://monorepo-host.vercel.app";

export const mfConfig = {
  server: {
    port: 3002,
  },
  name: "remote2",
  remotes: {
    host: `host@${PUBLIC_HOST}/remoteEntry.js`,
  },
  exposes: {
    "./Page1": "./src/pages/Page1",
    "./Page2": "./src/pages/Page2",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      eager: true,
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom": {
      eager: true,
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    },
  },
};
