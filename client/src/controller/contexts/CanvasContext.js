import React, { createContext, useState } from 'react';

export const CanvasContext = createContext(null);

export const CanvasContextProvider = ({ children }) => {
    const [selectedElement, setSelectedElement] = useState("canvas");
    const [canvasElementsData, setCanvasElementsData] = useState({});

    const value = {
        selectedElement,
        setSelectedElement,
        canvasElementsData,
        setCanvasElementsData
    };

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    );
};

export default CanvasContext;