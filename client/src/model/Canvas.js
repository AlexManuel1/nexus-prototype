
class Canvas {

    #width;
    #height;
    #defaultCanvasRatio = 8.5/11

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

}

export default Canvas;



