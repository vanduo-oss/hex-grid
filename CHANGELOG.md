# Changelog

All notable changes to `@vanduo-oss/hex-grid` are documented here.

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
