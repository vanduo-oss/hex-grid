# hex-data Specification

## Purpose

Per-hex terrain, yields, movement cost, passability, and arbitrary custom data, plus hex queries.

## Requirements

### Requirement: Terrain and derived attributes

The grid SHALL expose `setHexTerrain(q, r, type)` / `getHexTerrain(q, r)`, `generateRandomTerrain()`, and derived getters `getHexYields(q, r)` (`{ food, production, gold }`), `getHexMovementCost(q, r)`, and `isHexPassable(q, r)`.

#### Scenario: Set terrain

- GIVEN a live grid
- WHEN `setHexTerrain(0, 0, 'GRASSLAND')` is called
- THEN `getHexTerrain(0, 0)` SHALL return `'GRASSLAND'` and the derived yields/cost/passability SHALL reflect that terrain

### Requirement: Custom per-hex data

The grid SHALL expose `setHexData(q, r, data)`, `getHexData(q, r)`, and `clearHexData(q, r)`.

#### Scenario: Attach custom data

- GIVEN a live grid
- WHEN `setHexData(0, 0, { owner: 'blue' })` is called
- THEN `getHexData(0, 0)` SHALL return `{ owner: 'blue' }`

### Requirement: Hex queries

The grid SHALL expose `getHex(q, r)`, `getAllHexes()`, `hasHex(q, r)`, `getHexCount()`, and `hexDistance(q1, r1, q2, r2)`.

#### Scenario: Query a hex

- GIVEN a 15×10 grid
- WHEN `getHex(0, 0)` is called
- THEN it SHALL return the hex object, and `hasHex(0, 0)` SHALL be `true`
