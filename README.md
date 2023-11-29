![nuxt-ui-pro-docs-template](https://github.com/nuxt-ui-pro/docs/assets/904724/67fc15a7-92f6-4566-95b9-fe099012473c)

# Nuxt UI Pro - Docs template

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)
[![Nuxt Studio](https://img.shields.io/badge/Open%20in%20Nuxt%20Studio-18181B?&logo=nuxt.js&logoColor=3BB5EC)](https://nuxt.studio/themes/docs)

- [Live demo](https://nuxt-ui-pro-template-docs.vercel.app/)
- [Play on Stackblitz](https://stackblitz.com/github/nuxt-ui-pro/docs)
- [Documentation](https://ui.nuxt.com/pro/guide)
- [Clone on Nuxt Studio](https://nuxt.studio/themes/docs)

## Quick Start

```bash [Terminal]
npx nuxi init -t github:nuxt-ui-pro/docs
```

## Setup

Make sure to install the dependencies:

```bash
npx bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npx bun run dev
```

## Production

Build the application for production:

```bash
npx bun run build
```

Locally preview production build:

```bash
npx bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt Studio integration

Add `@nuxthq/studio` dependency to your package.json:

```bash
npx bun add -d @nuxthq/studio
```

Add this module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  ...
  modules: [
    ...
    '@nuxthq/studio'
  ]
})
```

Read more on [Nuxt Studio docs](https://nuxt.studio/docs/projects/setup).

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
