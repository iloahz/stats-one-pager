import DataX from "./data-x"
import DataXY from "./data-xy"

export default class Data {
    constructor() {
    }

    static parseX(text, sep) {
        const data = new DataX(sep)
        data.parse(text)
        return data
    }

    static parseXY(text, sep, sepXY) {
        const data = new DataXY(sep, sepXY)
        data.parse(text)
        return data
    }

    static parse(text) {
        return this.parseX(text, '\n')
    }
}
