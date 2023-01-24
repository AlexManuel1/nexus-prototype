import React, { createContext, useState } from 'react';

export const SelectionContext = createContext(null);

export const SelectionContextProvider = ({ children }) => {
    const [selectionTool, setSelectionTool] = useState("cursor");

    const value = {
        selectionTool,
        setSelectionTool,
    };

    return (
        <SelectionContext.Provider value={value}>
            {children}
        </SelectionContext.Provider>
    );
};

export default SelectionContext;