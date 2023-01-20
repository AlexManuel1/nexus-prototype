import React from 'react';
import CanvasComponent from './CanvasComponent';

// css imports
import '../styles/CanvasContainer.css';

const CanvasContainer = () => {

    return (
        <div id='canvasContainer'>
            <CanvasComponent />
        </div>
    );
};

export default CanvasContainer