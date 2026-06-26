import type { DefineComponent } from 'vue';

export interface VdHexGridProps {
  /** Hexagon size in px. Default 30. */
  size?: number;
  /** Grid columns (number of hexes). Default 10. */
  width?: number;
  /** Grid rows (number of hexes). Default 10. */
  height?: number;
  /** Grid rotation in radians. Default 0. */
  rotation?: number;
}

export declare const VdHexGrid: DefineComponent<VdHexGridProps>;
export default VdHexGrid;
