import { CGFobject } from "../lib/CGF.js";

export class MyTriangle extends CGFobject
{
  constructor(scene)
  {
    super(scene);
    this.initBuffers();
  }

  initBuffers()
  {
    this.vertices = 
    [
      -1, 1, 0,
      -1, -1, 0,
      1, -1, 0,
    ];

    this.indices = 
    [
      0, 1, 2,
    ];

    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }
}