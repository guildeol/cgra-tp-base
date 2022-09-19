import { CGFobject } from "../lib/CGF.js";

export class MyCGFobject extends CGFobject
{
  constructor(scene)
  {
    super(scene)

    this.transformArray = []
  }

  #privateExecuteTransform(transform)
  {
    var functionName = transform[0];
    var params = transform[1];

    switch(functionName)
    {
      case "scale":
        this.scene.scale(params[0], params[1], params[2]);
      break;

      case "translate":
        this.scene.translate(params[0], params[1], params[2])
      break;

      case "rotate":
        this.scene.rotate(params[0], params[1], params[2], params[3])
      break;

      default:
        // Do nothing
      break;
    }
  }

  rotate(degrees, x, y, z)
  {
    var rads = degrees * Math.PI / 180;

    var transform = ["rotate", [rads, x, y, z]]    
    this.transformArray.push(transform) 
  }

  uniformScale(scaleFactor)
  {
    var transform = ["scale", [scaleFactor, scaleFactor, scaleFactor]]    
    this.transformArray.push(transform)
  }

  translate(x, y, z)
  {
    var transform = ["translate", [x, y, z]]    
    this.transformArray.push(transform)
  }

  display()
  { 
    this.scene.pushMatrix();
    
    this.transformArray.forEach(this.#privateExecuteTransform.bind(this))

    super.display()

    this.scene.popMatrix();
  }
}