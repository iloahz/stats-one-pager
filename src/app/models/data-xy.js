export default class DataXY {
    constructor(sep, sepXY) {
        this.sep = sep
        this.sepXY = sepXY
        this.x = []
        this.y = []
    }

    parse(text) {
        const lines = text.split(this.sep)
        const xys = lines.map(line => line.split(this.sepXY))
        this.x = xys.map(xy => Number(xy[0]))
        this.y = xys.map(xy => Number(xy[1]))
    }
}
