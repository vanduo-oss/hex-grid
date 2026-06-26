# package-integration Specification

## Purpose

npm exports, build artifacts, the `hex-math` and optional `vue` subpaths, and published contents.

## Requirements

### Requirement: ESM and CJS builds

The package SHALL publish ESM (`dist/index.js`) and CJS (`dist/index.cjs`) entry points exporting the `VdHexGrid` class.

#### Scenario: Named import

- GIVEN a bundler resolving `@vanduo-oss/hex-grid`
- WHEN importing `{ VdHexGrid }`
- THEN the class SHALL be available

### Requirement: hex-math subexport

The package SHALL expose `@vanduo-oss/hex-grid/hex-math` (`dist/hex-math.js` / `dist/hex-math.cjs`) for the pure-math utilities. Behaviour is defined by the `hex-math` capability.

#### Scenario: Import hex-math only

- GIVEN a consumer needing only coordinate math
- WHEN importing from `@vanduo-oss/hex-grid/hex-math`
- THEN it SHALL resolve without pulling the canvas grid code path at runtime

### Requirement: No CSS export

Because rendering is on canvas, the package SHALL NOT ship a CSS export.

#### Scenario: Canvas-only styling

- GIVEN a consumer
- WHEN integrating the grid
- THEN no stylesheet import SHALL be required for the grid to render

### Requirement: Optional Vue subpath

The package SHALL expose `@vanduo-oss/hex-grid/vue` (`dist/vue.js`, `dist/vue.cjs`, types `dist/vue.d.ts`) with `vue` declared as an OPTIONAL peer dependency. Behaviour is defined by the `vue-bindings` capability.

#### Scenario: Vanilla consumer unaffected

- GIVEN a non-Vue consumer importing only `@vanduo-oss/hex-grid`
- THEN `vue` SHALL NOT be required to install or build the package

### Requirement: Published npm files

The package `files` field SHALL include only `dist/` and `README.md` — not `openspec/` or source.

#### Scenario: Tarball contents

- GIVEN `pnpm pack`
- WHEN the tarball is inspected
- THEN built artifacts and README SHALL be included AND `openspec/` SHALL be excluded
