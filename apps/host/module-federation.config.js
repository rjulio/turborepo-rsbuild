import { dependencies } from "./package.json";

export const mfConfig = {
  name: "host",
  remotes: {
    remote1: "remote1@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
