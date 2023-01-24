import React, { useEffect, useContext, useState } from 'react';
import Canvas from "../model/Canvas"; // import class
import SelectionContext from '../controller/contexts/SelectionContext'; // context imports
import CanvasContext from '../controller/contexts/CanvasContext'; // context imports
import { v4 } from 'uuid';

// css imports
import './styles/CanvasContainer.css';

const CanvasContainer = () => {

    const canvas = new Canvas(100, 200);
    const { selectionTool } = useContext(SelectionContext);
    const { selectedElement, setSelectedElement, canvasElements, setCanvasElements } = useContext(CanvasContext);

    useEffect(() => {
        console.log("selectionTool: ", selectionTool);
        console.log("selectedElement: ", selectedElement);
    }, [selectionTool])

    // create element
    const createElement = (e) => {
        if (selectionTool === "cursor") {
            setSelectedElement("canvas");
        } else {
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            const element = canvas.createElement(v4(), x, y, 100, 100, selectionTool)
            setCanvasElements([...canvasElements, element]);
        }
    }

    return (
        <div id='canvasContainer'>
            <svg
                id="rootSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                onClick={(e) => createElement(e)}
            >
                {canvasElements}
            </svg>
        </div>
    );
};

export default CanvasContainer