import React, { useEffect, useContext, useState } from 'react';
import Canvas from "../model/Canvas"; // import class
import SelectionContext from '../controller/contexts/SelectionContext'; // context imports
import CanvasContext from '../controller/contexts/CanvasContext'; // context imports
import { v4 } from 'uuid';

// component imports
import Rectangle from './CanvasElements/Rectangle';

// css imports
import './styles/CanvasContainer.css';

const CanvasContainer = () => {

    const { selectionTool } = useContext(SelectionContext);
    const { selectedElement, setSelectedElement, canvasElementsData, setCanvasElementsData } = useContext(CanvasContext);

    useEffect(() => {
        console.log("selectionTool: ", selectionTool);
        console.log("selectedElement: ", selectedElement);
        console.log(canvasElementsData);
    }, [selectionTool, canvasElementsData]);

    // create element
    const createElement = (e) => {
        if (selectionTool === "cursor") {
            setSelectedElement("canvas");
        } else {
            const key = v4();
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            const width = 200;
            const height = 200;
            let elementData = {
                x, y, width, height
            }
            setCanvasElementsData({...canvasElementsData, [key]: elementData});
        }
    }

    //handle MouseDown
    const handleMouseDown = (e) => {

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
                {Object.entries(canvasElementsData).map(([ key, value ]) => {
                    let { x, y, width, height } = value;
                    return (<Rectangle 
                        x={x} y={y} width={width} height={height} key={key} 
                        onClick={
                            (e) => {
                                console.log(e.target);
                            }
                        }
                    />);
                })}
            </svg>
        </div>
    );
};

export default CanvasContainer