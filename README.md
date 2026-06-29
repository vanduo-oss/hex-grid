# @vanduo-oss/hex-grid

[![npm](https://img.shields.io/npm/v/@vanduo-oss/hex-grid.svg)](https://www.npmjs.com/package/@vanduo-oss/hex-grid)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

> Interactive canvas hex grids for the [Vanduo](https://vanduo.dev) design system.

`VdHexGrid` — canvas-based hex grids with axial math, pan/zoom, terrain, and pathfinding. Theme-aware; framework-agnostic core with an optional Vue 3 wrapper.

## Install

```sh
pnpm add @vanduo-oss/hex-grid
```

## Quick start

```js
import { VdHexGrid } from "@vanduo-oss/hex-grid";

const grid = new VdHexGrid({
  element: document.getElementById("hex-container"),
  size: 30,
  width: 15,
  height: 10,
});

grid.on("select", (hex) => console.log("selected", hex));
```

Vue 3 (optional peer): `import { VdHexGrid } from "@vanduo-oss/hex-grid/vue"`.

```vue
<VdHexGrid :size="30" :width="15" :height="10" @select="onSelect" />
```

## Documentation

- Docs & live demos — https://vanduo.dev
- Agent / LLM reference (full class + hex-math API) — [SKILL.md](./SKILL.md)
- Changelog — [CHANGELOG.md](./CHANGELOG.md)

## License

[MIT](./LICENSE) © Vanduo
