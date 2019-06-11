# 🌟 Three Glow Mesh

Create glow mesh with any ThreeJS geometry.

`three-glow-mesh` is based off the awesome work by [stemkoski](https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/Shader-Halo.html). The original idea and motivation is laid out by the author in this [link](http://stemkoski.blogspot.com/2013/07/shaders-in-threejs-glow-and-halo.html).

## Install

```bash
yarn add three-glow-mesh
```

Note that `three-glow-mesh` requires `three >= 0.102.0` as a peer dependency.

## Usage

Import `createGlowMesh` and supply any ThreeJS geometry and a valid options object.

Here is an example of a common way to create a glow mesh:

```js
import { Mesh, Renderer, Scene } from 'three';
import { createGlowMesh, defaultOptions } from './three-glow-mesh';

const originalMesh = new Mesh(...);

// We can optionally import and overwrite the defaultOptions
const options = {
  ...defaultOptions,
  backside: true,
  coefficient: 0.5,
  color: 'gold',
  size: 2,
  power: 1
};
// You can reference the original mesh geometry or provide a custom one.
const glowMesh = createGlowMesh(originalMesh.geometry, options);
// You can add the glow mesh to any ThreeJS object (e.g. camera, scene),
// but it is common practice to just add and associate it with the original mesh.
originalMesh.add(glowMesh);

// three boilerplate (this is pseudocode)
const scene = new Scene();
const renderer = new WebGLRenderer({antialias: true});
scene.add(mesh);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
```

## Examples

In the following Codesandbox instances, edit the `geometry` and `options` to experiment with glow effects! You can test various values of `coefficient`, `color`, `power` using [this tool](http://stemkoski.github.io/Three.js/Shader-Glow.html).

### Basic Example

[![basic-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/uz1ki)

### Typescript Example

[![typescript-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/263dq)
