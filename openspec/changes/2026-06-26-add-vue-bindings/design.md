## Context

Vanduo ecosystem packages are intentionally framework-agnostic (zero runtime deps). Adding Vue support must not compromise that for vanilla/CDN users.

## Decision

Ship Vue bindings as a separate `./vue` subpath:

- `vue` is an OPTIONAL peer (`peerDependenciesMeta.vue.optional`) and `external` in esbuild, so installing or building the core never pulls Vue.
- The component is a thin wrapper: it renders a `<div class="vd-hex-grid">` containing a `<canvas>` (so the server can pre-render the container), then constructs `new VdHexGrid({ element })` in `onMounted` (the grid finds the canvas). Reactive props are driven through instance setters (`setSize`, `setDimensions`, `setRotation`) without recreating; `select`/`zoom`/`pan` are forwarded as Vue emits; `destroy()` runs on unmount.

## Build output impact

`scripts/build.js` gains two entries — `dist/vue.js` (ESM) and `dist/vue.cjs` (CJS) — both with `external: ['vue']`; `src/vue.d.ts` is copied to `dist/vue.d.ts`. The existing `index.*` and `hex-math.*` outputs are unchanged.

## Alternatives considered

- **vd2-only wrapper (no package change):** rejected — every Vue consumer would reinvent the wiring, and the docs would not demonstrate real installation.
- **Vue as a hard dependency:** rejected — would couple the framework-agnostic core to Vue.
