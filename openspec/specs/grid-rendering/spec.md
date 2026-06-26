# grid-rendering Specification

## Purpose

Render an axial hex grid to a 2D canvas with configurable size, dimensions, and rotation, following the active Vanduo theme.

## Requirements

### Requirement: Construct and render a grid

`new VdHexGrid({ element, size, width, height, rotation })` SHALL render a hex grid into a canvas. If no `canvas` is supplied, the grid SHALL find or create a `<canvas>` inside `element`.

#### Scenario: Construct from an element

- GIVEN a container element
- WHEN `new VdHexGrid({ element, size: 30, width: 15, height: 10 })` is constructed
- THEN a canvas SHALL be rendered into the element with a 15×10 hex grid

### Requirement: Adjust size, dimensions, and rotation

The grid SHALL expose `setSize(size)`, `setDimensions(width, height)`, `setRotation(radians)`, `getRotation()`, and `reset()`, re-rendering on change.

#### Scenario: Resize the grid

- GIVEN a live grid
- WHEN `setDimensions(20, 15)` is called
- THEN the grid SHALL re-render at 20×15 hexes

#### Scenario: Rotate the grid

- GIVEN a live grid
- WHEN `setRotation(-Math.PI / 6)` is called
- THEN the grid SHALL re-render rotated, and `getRotation()` SHALL return the new value

### Requirement: Theme-aware rendering

The grid SHALL read Vanduo `--vd-*` design tokens for its colors and SHALL re-render when the theme changes.

#### Scenario: Follows the theme

- GIVEN a rendered grid
- WHEN the active Vanduo theme changes
- THEN the grid SHALL re-render with the updated token-derived colors
