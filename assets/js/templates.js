const newElement = ({ tag, arrClass, objAttr, padre }) => {
    const element = document.createElement(tag)
    !arrClass || element.classList.add(...arrClass)
    for (const key in objAttr) element.setAttribute(key, objAttr[key])
    !padre || padre.appendChild(element)
    return element
}

const modalTemplate = animal => {
    return `
    <div class="text-center text-white">
        <img style="height: 20rem" src='${animal.img}'>
        <p class="mb-1 mt-3">${animal.edad}</p>
        <p class="mb-3">Comentarios</p>
        <div class="modal-footer justify-content-center">
            <p>${animal.comentarios}</p>
        </div>
    </div>
    `
}

const cardEvents = (animal, img, cardBody) => {
    img.addEventListener('click', () => document.querySelector('#exampleModal .modal-body').innerHTML = modalTemplate(animal))
    cardBody.addEventListener('click', () => {
        const audio = document.querySelector('#player')
        audio.setAttribute('src', `./assets/sounds/${animal.sonido}`)
        audio.play()
    })
}

const cardTemplate = animal => {
    const card = newElement({
        tag: 'div',
        arrClass: ['card', 'm-auto', 'p-2', 'participante', 'bg-transparent', 'border-0']
    })
    const img = newElement({
        tag: 'img',
        arrClass: ['card-img-top'],
        objAttr: {
            src: animal.img,
            style: `height: 12rem`,
            alt: animal.nombre,
            type: `button`,
            'data-toggle': `modal`,
            'data-target': `#exampleModal`
        },
        padre: card
    })
    const cardBody = newElement({
        tag: 'div',
        arrClass: ['card-body', 'bg-secondary', 'rounded-bottom', 'p-1'],
        objAttr: { style: "cursor:pointer" },
        padre: card
    })
    cardBody.appendChild(newElement({
        tag: 'img',
        objAttr: { src: "./assets/imgs/audio.svg", style: "height: 2rem; width: 2rem;" }
    }))
    cardEvents(animal, img, cardBody)
    return card
}

export default cardTemplate