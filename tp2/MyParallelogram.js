import { MyCGFobject } from "./MyCGFobject.js";

export class MyParallelogram extends MyCGFobject
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
      0, 0, 0, //0
      1, 1, 0, //1
      1, 0, 0, //2
      2, 0, 0, //3
      2, 1, 0, //4
      3, 1, 0, //5
    ];

    this.indices = 
    [
      0, 2, 1,
      0, 1, 2,
      1, 2, 3,
      1, 3, 2,
      1, 3, 4,
      1, 4, 3,
      4, 3, 5,
      4, 5, 3, 
    ];

    this.primitiveType = this.scene.gl.TRIANGLES;

    this.initGLBuffers();
  }
}