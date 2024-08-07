import { dependencies } from "./package.json";

export const mfConfig = {
  server: {
    port: 3001,
  },
  name: "remote1",
  remotes: {
    remote2: `remote2@${process.env.PUBLIC_REMOTE_2}/remoteEntry.js`,
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
