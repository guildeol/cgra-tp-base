import { MyCGFobject } from "./MyCGFobject.js";

export class MyTriangle extends MyCGFobject
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
      0, 0, 0,
      2, 0, 0,
      1, 1, 0,
    ];

    this.indices = 
    [
      0, 1, 2,
    ];

    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }
  
}