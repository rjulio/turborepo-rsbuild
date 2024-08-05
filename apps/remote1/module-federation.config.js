import { dependencies } from "./package.json";

export const mfConfig = {
  name: "remote1",
  exposes: {
    "./Remote1Home": "./src/pages/Remote1Home",
  },
  filename: "remoteEntry.js",
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
