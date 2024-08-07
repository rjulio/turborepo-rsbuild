# Remote2 App Project

Remote2 project, using ModuleFederation, imports `/page1` and `/page2` from `remote1` app.

Home page contains links to pages, loading pages in lazy mode from remote1 app

Imports Layout, Button and Loading components from ui packages, declared in Host package.json

Imports eslint configuration from eslint-config file in packages, declared in Host package.json

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
