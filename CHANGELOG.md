# Changelog

All notable changes to `@vanduo-oss/hex-grid` are documented here.

## [1.1.0] — 2026-06-27

### Added
- **Optional Vue 3 binding** at `@vanduo-oss/hex-grid/vue` — a `VdHexGrid` component
  (props `size`, `width`, `height`, `rotation`; emits `select`, `zoom`, `pan`, `ready`).
  `vue` is an *optional* peer dependency, marked external in the build, so vanilla
  consumers are unaffected. SSR-safe (the canvas grid is created on mount); prop
  changes are driven through the instance setters; exposes `{ getInstance() }`.
- First OpenSpec `vue-bindings` capability; `package-integration` extended with the
  `./vue` subpath.
- `llms.txt` LLM context file and a README **Vue 3** section.

### Changed
- `files` now publishes `CHANGELOG.md`, `LICENSE`, and `llms.txt` alongside `dist/`
  and `README.md` (previously only `dist/` and `README.md` shipped).

## [1.0.1]

### Fixed
- **Theme colors** now read Vanduo's canonical `--vd-*` custom properties (with the
  legacy unprefixed names kept as a fallback). Previously the grid read
  non-existent `--bg-primary` / `--text-primary` … tokens and so rendered with the
  hardcoded light fallback colors regardless of the active theme.

### Added
- **OS theme following** — the grid now also re-renders on `prefers-color-scheme`
  changes, not only on `data-theme` attribute flips, so the canvas re-themes
  without a page reload.
- **`destroy()`** — disconnects the theme `MutationObserver` and the media-query
  listener. Call it before discarding an instance (e.g. on SPA navigation).

## [1.0.0]

- Initial standalone release of `VdHexGrid` (canvas hex grid with terrain,
  pathfinding, and pan/zoom).
