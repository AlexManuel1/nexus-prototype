import React, { useContext } from 'react';
import { ReactComponent as Cursor } from '../assets/svgs/cursor.svg'; // svg imports
import { ReactComponent as Rectangle } from '../assets/svgs/rectangle.svg'; // svg imports
import SelectionContext from '../controller/contexts/SelectionContext'; // context imports
import colorPalette from './styles/ColorPalette'; // context imports
import "./styles/ShapeContainer.css" // css imports
import { primary, secondary, tertiary } from "./styles/ColorPalette"; // color palette import


const OptionButton = ({ selection, svg }) => {
    const { selectionTool, setSelectionTool } = useContext(SelectionContext);
    // generate svg based on selection Tool name
    const renderSvg = () => {
        switch (selection) {
            case 'cursor':
                return <Cursor style={{color: selectionTool === selection ? "white" : "black"}}/>
            case 'rectangle':
                return <Rectangle style={{color: selectionTool === selection ? "white" : "black"}}/>
        };
    };

    return (
        <button 
            className='option-button'
            onClick={() => setSelectionTool(selection)}
            style={{backgroundColor: selectionTool === selection ? primary : "transparent"}}
        >
            {renderSvg()}
        </button>
    );
};

export default OptionButton