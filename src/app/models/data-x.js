export default class DataX {
    constructor(sep) {
        this.sep = sep
        this.x = []
    }

    parse(text) {
        const lines = text.split(this.sep)
        this.x = lines.map(s => Number(s))
    }
}
