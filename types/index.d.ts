import { Geometry, Mesh, ShaderMaterial } from 'three';

export function createGlowMaterial(
  coefficient: number,
  color: string,
  power: number,
): ShaderMaterial;

export function createGlowGeometry(geometry: Geometry, size: number): Geometry;

export interface Options {
  backside: boolean;
  coefficient: number;
  color: string;
  size: number;
  power: number;
}

export const defaultOptions: Options;

export function createGlowMesh(geometry: Geometry, options: Options): Mesh;
