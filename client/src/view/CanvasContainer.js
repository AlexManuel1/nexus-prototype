import React, { useEffect, useContext, useState } from 'react';
import canvas from "../model/Canvas"; // import class
import SelectionContext from '../controller/contexts/SelectionContext'; // context imports

// css imports
import './styles/CanvasContainer.css';

const CanvasContainer = () => {

    const { selectionTool } = useContext(SelectionContext);
    const [canvasElements, setCanvasElements] = useState([]);

    useEffect(() => {
        console.log(selectionTool)
    }, [selectionTool])

    // make sure click is within div

    const createRectangle = (e) => {
        console.log("canvas onclick: ", e);

        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;

        setCanvasElements([
            ...canvasElements,
            <svg
                x={x + "px"}
                y={y + "px"}
                width="100"
                height="100"
                viewBox='0 0 100 100'
                key={"rect " + e.timeStamp}
            >
                <rect width="100%" height="100%"/>
            </svg>
        ]);
    }

    return (
        <div id='canvasContainer'>
            <svg
                id="rootSvg"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                onClick={(e) => createRectangle(e)}
            >
                {canvasElements}
            </svg>
        </div>
    );
};

export default CanvasContainer