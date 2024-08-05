import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  server: {
    port: 3000,
  },
  remotes: {
    remote1: "remote1@http://localhost:3001/remoteEntry.js",
  },
  exposes: {
    "./Button": "./src/components/Button",
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
