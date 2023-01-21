import React from 'react';
import Canvas from "../classes/Canvas";

const CanvasComponent = () => {

    let canvas = new Canvas(100,200);
    console.log(canvas.width);

    return (
        <div>canvas</div>
    );
};

export default CanvasComponent