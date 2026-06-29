---
name: vanduo-hex-grid
description: Use when building interactive hex grids with @vanduo-oss/hex-grid — a standalone canvas VdHexGrid (axial math, pan/zoom, terrain, pathfinding) with an optional Vue 3 wrapper. Covers install, the class + hex-math API, events, security, and caveats.
---

# @vanduo-oss/hex-grid

Standalone **canvas hex-grid** for the Vanduo design system: `VdHexGrid` with axial hex math, pan/zoom, terrain, and BFS pathfinding. Theme-aware (reads `--vd-*` tokens); framework-agnostic core with an optional Vue 3 wrapper at `./vue`.

## Install

```sh
pnpm add @vanduo-oss/hex-grid
```

```js
import { VdHexGrid } from "@vanduo-oss/hex-grid";

const grid = new VdHexGrid({ element, canvas, size: 30, width: 15, height: 10 });
grid.on("select", (hex) => console.log(hex));
```

Pure math helpers: `import { hexToPixel, hexDistance } from "@vanduo-oss/hex-grid/hex-math"`. Vue 3 (optional peer `vue >=3.3`): `import { VdHexGrid } from "@vanduo-oss/hex-grid/vue"`.

## Architecture

- 2D canvas rendering of flat-top hexagons with pointer/touch (pan, pinch-zoom); theme-aware via a MutationObserver on `--vd-*` tokens.
- Axial (q/r) coordinates; pixel conversion, distance, and adjacency are pure functions in the `hex-math` subpath.
- Terrain layer (8 types) with yields/movement costs + BFS pathfinding.
- Optional Vue wrapper is SSR-safe (grid created on client mount; prop changes go through setters, no recreate).

## API

- **Constructor:** `new VdHexGrid({ element, canvas?, size=30, width=10, height=10, rotation=0 })`.
- **Events:** `on(event, cb)` for `select`, `zoom`, `pan`, `ready`.
- **Grid:** `setSize`, `setDimensions`, `setRotation`, `resetView`, `zoomIn`/`zoomOut`, `reset`, `fillRandom`, `getTransform`, `getHexCount`, `hasHex`.
- **Hexes:** `getHex(q,r)`, `getAllHexes()`, `setHexFill(q,r,color)`, `setHexData`/`getHexData`/`clearHexData`.
- **Terrain & movement:** `setHexTerrain`/`getHexTerrain`, `generateRandomTerrain`, `getValidMoves(q,r,points)`, `getPath(sq,sr,eq,er)` (BFS), `hexDistance`, `exportTerrainData`/`importTerrainData`.
- **Rendering:** `setCustomRender(cb)`/`clearCustomRender()`. **Lifecycle:** `destroy()` (disconnects observers — call before discarding).
- **hex-math exports:** `hexToPixel`, `pixelToHex`, `axialRound`, `rotatePoint`/`unrotatePoint`, `getHexCorners`, `getAdjacentHexes`, `hexDistance`, `isPassable`, `getMovementCost`, `getTerrainYields`, `getTerrainColor`; `TerrainType`, `TERRAIN_COLORS`, `TERRAIN_YIELDS`, `TERRAIN_MOVEMENT_COSTS`, `DEFAULT_TERRAIN_COLOR`.
- **Vue:** `<VdHexGrid :size :width :height :rotation @select @zoom @pan @ready>`; template ref exposes `getInstance()`.

## Security

- No `eval` / dynamic script execution; rendering is sandboxed to a canvas context.
- DOM-bound: requires a real `HTMLElement` + canvas context.

## Caveats

- Canvas/DOM required — the core can't run in SSR directly; the Vue component is SSR-safe (creates the grid on mount).
- Call `destroy()` before discarding instances (disconnects the theme MutationObserver + media-query listeners).
- `vue` is an optional peer (vanilla consumers unaffected). OCEAN and MOUNTAIN are impassable (movement cost 999).

## Docs

Full documentation and live demos: https://vanduo.dev
