## Why

`@vanduo-oss/hex-grid` was vanilla-only. The Vanduo docs are moving to the Vue 3 engine (`@vanduo-oss/vd2`), which needs a first-class Vue component for the canvas hex grid. Shipping optional Vue bindings lets any Vue 3 app mount `<VdHexGrid>` directly while the core stays framework-agnostic for vanilla/CDN users.

## What Changes

- Add an optional `./vue` subpath export (`src/vue.js` → `dist/vue.js` / `dist/vue.cjs`, types `dist/vue.d.ts`) shipping the `VdHexGrid` component.
- Declare `vue` as an OPTIONAL peer dependency and mark it external in the esbuild build.
- Bump version `1.0.1` → `1.1.0` (additive, minor).
- Establish the package's first OpenSpec capability specs.

## Capabilities

### New Capabilities

- `vue-bindings`: optional Vue 3 `<VdHexGrid>` component over the grid (SSR-safe, reactive props via setters, forwarded select/zoom/pan events, optional `vue` peer).

### Modified Capabilities

- `package-integration`: add the `./vue` subpath export and the optional `vue` peer.

## Impact

- **Semver:** Minor — additive; the existing ESM/CJS and `./hex-math` API is unchanged.
- **Compatibility:** Vanilla consumers are unaffected; `vue` is required only when importing `@vanduo-oss/hex-grid/vue`.
- Files: `src/vue.js`, `src/vue.d.ts` (new); `scripts/build.js` (vue entry, `vue` external); `package.json` (`./vue` export, optional peer, `vue` devDep, version).
- Docs: vd2 consumes `@vanduo-oss/hex-grid/vue` on its Hex Grid page; built `dist/` syncs to docs ecosystem assets.
- Publish: requires publishing `@vanduo-oss/hex-grid@1.1.0` before vd2 can pin the published `^1.1.0` range.
