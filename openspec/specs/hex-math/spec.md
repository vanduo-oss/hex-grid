# hex-math Specification

## Purpose

A dependency-free, independently importable subexport of pure axial hex math and terrain tables: `@vanduo-oss/hex-grid/hex-math`.

## Requirements

### Requirement: Axial coordinate math

`@vanduo-oss/hex-grid/hex-math` SHALL export pure functions `hexToPixel`, `pixelToHex`, `axialRound`, `getHexCorners`, `getAdjacentHexes`, `hexDistance`, `rotatePoint`, and `unrotatePoint`.

#### Scenario: Distance between hexes

- GIVEN two axial coordinates
- WHEN `hexDistance(q1, r1, q2, r2)` is called
- THEN it SHALL return the integer hex distance

#### Scenario: Pixel round-trip

- GIVEN a hex `(q, r)` and a size
- WHEN `pixelToHex(...hexToPixel(q, r, size), size)` then `axialRound(...)` is applied
- THEN the original `(q, r)` SHALL be recovered

### Requirement: Terrain tables and helpers

The subexport SHALL export `TerrainType`, `TERRAIN_COLORS`, `TERRAIN_YIELDS`, `TERRAIN_MOVEMENT_COSTS`, `DEFAULT_TERRAIN_COLOR`, and helpers `isPassable`, `getMovementCost`, `getTerrainYields`, and `getTerrainColor`.

#### Scenario: Terrain yields

- GIVEN a terrain type from `TerrainType`
- WHEN `getTerrainYields(type)` is called
- THEN it SHALL return the terrain's `{ food, production, gold }` yields

### Requirement: Independent import

The subexport SHALL be importable without constructing a grid or touching the DOM.

#### Scenario: Node-side import

- GIVEN a non-DOM environment
- WHEN importing from `@vanduo-oss/hex-grid/hex-math`
- THEN the math functions SHALL be usable without a canvas or `window`
