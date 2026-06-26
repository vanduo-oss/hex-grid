# vue-bindings Specification

## Purpose

Optional Vue 3 component for the hex grid, shipped at `@vanduo-oss/hex-grid/vue`. The core package stays framework-agnostic; these bindings are additive.

## Requirements

### Requirement: VdHexGrid component

`@vanduo-oss/hex-grid/vue` SHALL export a `VdHexGrid` component with props `size`, `width`, `height`, and `rotation`.

#### Scenario: Render a grid

- GIVEN `<VdHexGrid :size="30" :width="15" :height="10" />`
- WHEN mounted in a Vue 3 application
- THEN a canvas hex grid SHALL render into the component's container

### Requirement: Reactive props and forwarded events

The component SHALL drive prop changes through the instance setters (`setSize`, `setDimensions`, `setRotation`) without recreating, forward `select`, `zoom`, and `pan` as Vue events, and emit `ready` with the instance.

#### Scenario: Resize via prop

- GIVEN a mounted `VdHexGrid`
- WHEN `width`/`height` props change
- THEN the grid SHALL call `setDimensions()` and re-render in place

#### Scenario: Forwarded select

- GIVEN `<VdHexGrid @select="onSelect" />`
- WHEN a hex is clicked
- THEN `onSelect` SHALL receive the hex

### Requirement: SSR safety

The component SHALL render a plain container with a `<canvas>` during SSR and create the grid only after mount on the client; it SHALL destroy the instance on unmount.

#### Scenario: Server render

- GIVEN server-side rendering with no DOM
- WHEN `VdHexGrid` renders
- THEN it SHALL output an empty `<div class="vd-hex-grid">` (with a `<canvas>`) without creating a grid

#### Scenario: Unmount cleanup

- GIVEN a mounted `VdHexGrid`
- WHEN the component unmounts
- THEN the grid instance SHALL be destroyed

### Requirement: Vue is an optional peer

`vue` SHALL be declared as an optional peer dependency (`peerDependenciesMeta.vue.optional`) and marked external in the build, never bundled into the package.

#### Scenario: Build externalizes vue

- GIVEN the built `dist/vue.js`
- THEN it SHALL import `vue` at runtime rather than bundle it
