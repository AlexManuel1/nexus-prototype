
class Shape {

    constructor(id, x, y, width, height) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    get id() {
        return this._id;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

}

export default Shape;

