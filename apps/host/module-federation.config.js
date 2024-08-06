import { dependencies } from "./package.json";

const PUBLIC_REMOTE_1 =
  process.env.PUBLIC_REMOTE_1 || "https://monorepo-remote1.vercel.app";
const PUBLIC_REMOTE_2 =
  process.env.PUBLIC_REMOTE_2 || "https://monorepo-remote2.vercel.app";

export const mfConfig = {
  name: "host",
  server: {
    port: 3000,
  },
  remotes: {
    remote1: `remote1@${PUBLIC_REMOTE_1}/remoteEntry.js`,
    remote2: `remote2@${PUBLIC_REMOTE_2}/remoteEntry.js`,
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
