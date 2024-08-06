import { dependencies } from "./package.json";

console.info(process.env);

export const mfConfig = {
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  server: {
    port: 3002,
  },
  name: "remote2",
  remotes: {
    host: `host@${process.env.REACT_APP_HOST}/remoteEntry.js`,
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
