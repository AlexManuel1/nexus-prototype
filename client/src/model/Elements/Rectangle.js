import Shape from '../Shape';

class Rectangle extends Shape {

    constructor(id, x, y, width, height) {
        super(id, x, y, width, height);
    }

    generateComponent() {
        return (
            <rect
                x={this._x + "px"}
                y={this._y + "px"}
                width={this._width}
                height={this._height}
                key={this._id}
                style={{ 
                    fill: 'white', 
                    strokeWidth: '1',
                    stroke: "black" 
                }}
            >
            </rect>
        );
    };

};

export default Rectangle;