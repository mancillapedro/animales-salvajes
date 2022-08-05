import { Leon, Lobo, Oso, Serpiente, Aguila } from './animal-hijos.js'
import { get, danger, datosAnimal } from './IIFEs.js'
import cardTemplate from './templates.js'

Array.prototype.last = function () { return this[this.length - 1] };
const styleSheet = [...document.styleSheets].last()
styleSheet.insertRule(`img {object-fit: cover;}`)
styleSheet.insertRule(`.shadow-danger {box-shadow: 0px 0px 1px 1px var(--danger) !important;}`)

const limpiar = () => {
    get.selects().forEach(_ => { _.selectedIndex = 0; danger.remove(_) })
    get.by('#comentarios').value = ''
    get.by('#preview').innerHTML = ''
}

const newDatosAnimal = () => {
    const [nombre, edad] = get.selects().map(_ => {
        const select = _.selectedOptions[0]; return !select.disabled ? select.value : ''
    })
    const comentarios = get.by('#comentarios').value.trim()
    const img = `./assets/imgs/${datosAnimal.afterPreview().imagen}`
    const { sonido } = datosAnimal.afterPreview()
    return { nombre, edad, comentarios, img, sonido }
}

const newAnimal = datos => {
    switch (datos.nombre) {
        case 'Leon': return new Leon(datos)
        case 'Lobo': return new Lobo(datos)
        case 'Oso': return new Oso(datos)
        case 'Serpiente': return new Serpiente(datos)
        case 'Aguila': return new Aguila(datos)
    }
}

const validar = obj => Object.values(obj).every(value => Boolean(value)) || danger.on()

limpiar()
get.selects().forEach(_ => _.addEventListener('change', event => {
    event.originalTarget.id != 'animal' || datosAnimal.preview(event.target.value)
    danger.remove(event.originalTarget)
}))
get.by('#comentarios').addEventListener('input', event => danger.remove(event.target))
get.by('#btnRegistrar').addEventListener('click', () => {
    const datos = newDatosAnimal()
    if (!validar(datos)) return;
    get.by('#Animales').appendChild(cardTemplate(newAnimal(datos)))
    limpiar()
})