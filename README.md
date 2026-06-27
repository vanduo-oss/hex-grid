# @vanduo-oss/hex-grid

Standalone `VdHexGrid` package for canvas-based hex grids.

## Install

```bash
pnpm add @vanduo-oss/hex-grid
```

## Usage

```js
import { VdHexGrid } from '@vanduo-oss/hex-grid';

const grid = new VdHexGrid({
  element: document.getElementById('hex-demo-container'),
  canvas: document.getElementById('hex-demo'),
  size: 30,
  width: 15,
  height: 10,
  rotation: 0
});
```

## Optional Utility Import

```js
import { hexToPixel, pixelToHex, hexDistance } from '@vanduo-oss/hex-grid/hex-math';
```

## API

### Constructor

```js
new VdHexGrid({ element, canvas, size, width, height, rotation })
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `element` | `HTMLElement` | required | Container element |
| `canvas` | `HTMLCanvasElement` | auto-created | Canvas element |
| `size` | `number` | `30` | Hex radius in pixels |
| `width` | `number` | `10` | Grid width in hexes |
| `height` | `number` | `10` | Grid height in hexes |
| `rotation` | `number` | `0` | Grid rotation in radians |

### Methods

- `on(event, callback)` — Subscribe to events (`select`, `zoom`, `pan`)
- `setSize(size)` — Change hex radius
- `setDimensions(width, height)` — Change grid dimensions
- `setRotation(rotation)` — Rotate the grid
- `reset()` — Reset to defaults
- `resetView()` — Reset pan and zoom
- `zoomIn()` / `zoomOut()` — Adjust zoom
- `fillRandom()` — Fill hexes with random colors
- `getHex(q, r)` — Get a hex by coordinates
- `getAllHexes()` — Get all hexes
- `setHexFill(q, r, color)` — Set hex fill color
- `setHexTerrain(q, r, terrainType)` — Set hex terrain
- `getHexTerrain(q, r)` — Get hex terrain
- `generateRandomTerrain()` — Randomize all terrains
- `getValidMoves(q, r, movementPoints)` — Get reachable hexes
- `getPath(startQ, startR, endQ, endR)` — BFS pathfinding
- `hexDistance(q1, r1, q2, r2)` — Distance between hexes
- `setHexData(q, r, data)` / `getHexData(q, r)` / `clearHexData(q, r)` — Custom data
- `exportTerrainData()` / `importTerrainData(data)` — Serialization
- `setCustomRender(callback)` / `clearCustomRender()` — Per-hex rendering hooks

### Terrain Types

`GRASSLAND`, `PLAINS`, `DESERT`, `TUNDRA`, `SNOW`, `MOUNTAIN`, `OCEAN`, `COAST`

### Hex Math Utilities

```js
import {
  hexToPixel, pixelToHex, axialRound, rotatePoint, unrotatePoint,
  getHexCorners, getAdjacentHexes, hexDistance, isPassable,
  getMovementCost, getTerrainYields, getTerrainColor,
  TerrainType, TERRAIN_COLORS, DEFAULT_TERRAIN_COLOR,
  TERRAIN_YIELDS, TERRAIN_MOVEMENT_COSTS
} from '@vanduo-oss/hex-grid/hex-math';
```

## Vue 3

An optional Vue 3 component ships at `@vanduo-oss/hex-grid/vue`. `vue` is an *optional* peer dependency — needed only when you import this subpath, so vanilla/CDN consumers are unaffected. The component is SSR-safe (the canvas grid is created on mount into a plain container the server can pre-render).

```vue
<script setup>
import { VdHexGrid } from '@vanduo-oss/hex-grid/vue';

function onSelect(hex) {
  console.log('selected', hex);
}
</script>

<template>
  <VdHexGrid :size="30" :width="15" :height="10" @select="onSelect" />
</template>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `size` | `number` | `30` | Hexagon size in px. |
| `width` | `number` | `10` | Grid columns (number of hexes). |
| `height` | `number` | `10` | Grid rows (number of hexes). |
| `rotation` | `number` | `0` | Grid rotation in radians. |

Emits `select`, `zoom`, `pan` (forwarded from the grid) plus `ready` (the grid instance, on mount). Prop changes are driven through the instance setters (`setSize`, `setDimensions`, `setRotation`) — no recreate. The component exposes `{ getInstance() }` via template ref for the full imperative API. Types ship with the subpath (`dist/vue.d.ts`).

## License

MIT