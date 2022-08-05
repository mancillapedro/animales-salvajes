import Animal from "./animal.js"

class Leon extends Animal {
    constructor() { super(...arguments) }
    rugir() { return this._getSonidoAnimal() }
}

class Lobo extends Animal {
    constructor() { super(...arguments) }
    aullar() { return this._getSonidoAnimal() }
}

class Oso extends Animal {
    constructor() { super(...arguments) }
    gruñir() { return this._getSonidoAnimal() }
}

class Serpiente extends Animal {
    constructor() { super(...arguments) }
    sisear() { return this._getSonidoAnimal() }
}

class Aguila extends Animal {
    constructor() { super(...arguments) }
    chillar() { return this._getSonidoAnimal() }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }