
import {CGFapplication} from '../lib/CGF.js';
import { MyScene } from './MyScene.js';
import { MyInterface } from './MyInterface.js';

import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";

class MyScaleMatrix
{
    constructor(scaleFactor)
    {
        var scaleMatrix = [
            scaleFactor,
            0.0,
            0.0,
            0.0,
            0.0,
            scaleFactor,
            0.0,
            0.0,
            0.0,
            0.0,
            scaleFactor,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            ];
    }

    getTransformMatrix()
    {
        return this.scaleMatrix;
    }
}

function main()
{
    var app = new CGFapplication(document.body);

    var myScene = new MyScene();
    var myInterface = new MyInterface();

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

    // var diamond = new MyDiamond(myScene);
    var largeTriangle1 = new MyTriangle(myScene);

    largeTriangle1.uniformScale(2)
    largeTriangle1.translate(-2, 0, 0);
    largeTriangle1.rotate(90, 0, 0, 1);

    var primitiveList = [largeTriangle1];

    myScene.setPrimitiveList(primitiveList);

    app.run();
}

main();