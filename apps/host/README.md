# Host App Project

Main project, using ModuleFederation, imports `/page1` and `/page2` from `remote1` and `remote2` apps.

Home page contains links to pages, loading pages in lazy mode from projects

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
