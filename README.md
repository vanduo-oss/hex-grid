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

## License

MIT