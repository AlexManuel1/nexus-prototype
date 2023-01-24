import Rectangle from "./Elements/Rectangle";

class Canvas {

    constructor(width, height) {
        this._width = width;
        this._height = height;
        this._elements = {};
    }

    createElement(id, x, y, width, height, type) {
        let element;
        // create new element based on selection tool
        switch (type) {
            case "rectangle":
                element = new Rectangle(id, x, y, width, height);
                break;
        };
        // selection tool is not shape, return
        if (element === undefined) return;
        this._elements[id] = element;
        return element.generateComponent();
    }

    // get methods
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get elements() {
        return this._elements;
    }

}

export default Canvas;



