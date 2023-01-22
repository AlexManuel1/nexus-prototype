import React, { useState, useEffect, useRef } from 'react';
import canvas from "../model/Canvas";
import CanvasComponent from './CanvasComponent';

// css imports
import '../styles/CanvasContainer.css';

const CanvasContainer = () => {

    let [width, setWidth] = useState();
    let [height, setHeight] = useState();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        console.log(ctx);
        ctx.strokeRect(10, 10, 200, 100);
        ctx.strokeText("hello world", 50, 50, 500);
        //const canvas = document.getElementById("canvas");
        //const ctx = canvas.getContext("2d");

        
    }, [])

    return (
        <div id='canvasContainer'>
            <canvas id="canvas" ref={canvasRef}></canvas>
        </div>
    );
};

export default CanvasContainer