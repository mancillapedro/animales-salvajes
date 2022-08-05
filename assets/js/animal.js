export default class Animal {
    constructor({ nombre, edad, img, comentarios, sonido }) {
        const _nombre = String(nombre)
        const _edad = String(edad)
        const _img = String(img)
        let _comentarios = String(comentarios)
        const _sonido = String(sonido)
        this._getNombreAnimal = () => _nombre
        this._getEdadAnimal = () => _edad
        this._getImgAnimal = () => _img
        this._getComentariosAnimal = () => _comentarios //
        this._setComentariosAnimal = new_comentarios => { _comentarios = new_comentarios }
        this._getSonidoAnimal = () => _sonido
    }
    get nombre() { return this._getNombreAnimal() }
    get edad() { return this._getEdadAnimal() }
    get img() { return this._getImgAnimal() }
    get comentarios() { return this._getComentariosAnimal() } //
    set comentarios(new_comentarios) { this._setComentariosAnimal(new_comentarios) }
    get sonido() { return this._getSonidoAnimal() }
}