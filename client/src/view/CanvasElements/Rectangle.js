import React from 'react';

const Rectangle = (props) => {
    return (
        <rect
            x={props.x + "px"}
            y={props.y + "px"}
            width={props.width}
            height={props.height}
            style={{
                fill: 'white', 
                strokeWidth: '1',
                stroke: "black" 
            }}
            onClick={props.onClick}
        />
        
    );
};

export default Rectangle;