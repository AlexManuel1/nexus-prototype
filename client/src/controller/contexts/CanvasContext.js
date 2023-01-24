import React, { createContext, useState } from 'react';

export const CanvasContext = createContext(null);

export const CanvasContextProvider = ({ children }) => {
    const [selectedElement, setSelectedElement] = useState("canvas");
    const [canvasElements, setCanvasElements] = useState([]);

    const value = {
        selectedElement,
        setSelectedElement,
        canvasElements,
        setCanvasElements
    };

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    );
};

export default CanvasContext;