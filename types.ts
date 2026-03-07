
export interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  baseSize: number;
  color: string;
  targetColor: string;
  angle: number;
  distance: number;
  speed: number;
  vx: number;
  vy: number;
  friction: number;
  ease: number;
}

export enum AppMode {
  NORMAL = 'NORMAL'
}
