import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  server: {
    port: 3000,
  },
  remotes: {
    remote1: `remote1@${process.env.PUBLIC_REMOTE_1}/remoteEntry.js`,
    remote2: `remote2@${process.env.PUBLIC_REMOTE_2}/remoteEntry.js`,
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
