# interaction Specification

## Purpose

Pointer interaction (select, pan, zoom) and event subscription.

## Requirements

### Requirement: Event subscription

The grid SHALL expose `on(event, callback)` and `off(event, callback)` for the events `select`, `zoom`, and `pan`.

#### Scenario: Select a hex

- GIVEN a subscriber to `select`
- WHEN a hex is clicked
- THEN `select` SHALL fire with the hex object (including its `q`, `r` coordinates)

#### Scenario: Zoom event

- GIVEN a subscriber to `zoom`
- WHEN the grid is zoomed
- THEN `zoom` SHALL fire with `{ scale }`

### Requirement: Pan and zoom interaction

The grid SHALL support drag-to-pan and zoom, maintaining an internal transform; `reset()` SHALL restore the default pan/zoom.

#### Scenario: Reset view

- GIVEN a panned/zoomed grid
- WHEN `reset()` is called
- THEN the transform SHALL return to defaults and `pan`/`zoom` events SHALL reflect the reset
