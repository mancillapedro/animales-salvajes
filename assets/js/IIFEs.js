const get = (() => {
    const by = selector => document.querySelector(selector)
    const selects = () => [by('#animal'), by('#edad')]
    return { by, selects }
})()

const danger = (() => {
    const dangerClass = ['border-danger', 'text-danger', 'shadow-danger']
    const add = element => { element.classList.add(...dangerClass) }
    const remove = element => { element.classList.remove(...dangerClass) }
    const on = () => {
        alert('Falta agregar información...')
        get.selects().forEach(_ => !_.selectedOptions[0].disabled || add(_))
        const comentarios = get.by('#comentarios')
        comentarios.value.trim() || add(comentarios)
        return false
    }
    return { remove, on }
})()

const datosAnimal = (() => {
    let json;
    const getData = async animal => {
        try { return (await (await fetch('./animales.json')).json()).animales.find(obj => obj.name == animal) }
        catch (error) { alert('API problem', error) }
    }
    const preview = async animal => {
        json = await getData(animal)
        if (json) get.by('#preview').innerHTML = `<img src="./assets/imgs/${json.imagen}" alt="${animal}">`
    }
    return { preview, afterPreview: () => json || {} }
})()

export { get, danger, datosAnimal}