import { dependencies } from "./package.json";

console.info("import.meta", import.meta.env.PUBLIC_REMOTE_1);

export const mfConfig = {
  name: "host",
  server: {
    port: 3000,
  },
  remotes: {
    remote1: `remote1@${import.meta.env.PUBLIC_REMOTE_1}/remoteEntry.js`,
    remote2: `remote2@${import.meta.env.PUBLIC_REMOTE_2}/remoteEntry.js`,
  },
  exposes: {
    "./Button": "./src/components/Button",
    "./Layout": "./src/components/Layout",
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
