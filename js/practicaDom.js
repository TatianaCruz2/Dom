// document.querySelector('h3')
// console.log(document.querySelector('h3'))
// console.log(document.querySelector('.h3-danger'))
// console.log(document.querySelector('#parrafo'))
// console.log(document.getElementById('parrafo'))
// console.log(document.querySelectorAll('.h3-danger'))
// console.log(document.querySelectorAll('h3'))
// modifica el elemento
// const parrafo = document.querySelector('#parrafo')
// parrafo.textContent = "Texto desde JS"
// //inner html permite ingresar etiquetas
// parrafo.innerHTML = '<b> Texto con innerHTML </b>'
// //classlist permite agrgar clases especificas
// parrafo.classList.add('h3-danger')

//create element y el innerHTML ocasionan un error reflow
// const lista = document.getElementById('lista')
// console.log(lista)
// const arrayElement = ['primer elemneto', 'segundo', 'Tercero']
// arrayElement.forEach(item => {
//     const li = document.createElement('li')
//     li.textContent = item
//     console.log(item)
//     //agrega un elemento hijo
//     lista.appendChild(li)
// })
//fragment soluciona el reflow
// const lista = document.getElementById('lista')
// const arrayItem = ["item 1", "item 2", "item 3"]
// const fragment = document.createDocumentFragment()
// arrayItem.forEach(item => {
//     const li = document.createElement('li')
//     li.textContent = item
//     fragment.appendChild(li)
// })
// lista.appendChild(fragment)

//otra forma de insetar elementos
const lista = document.getElementById('lista')
const arrayItem = ["item 1", "item 2", "item 3"]
const fragment = document.createDocumentFragment()
arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    const chilNode = fragment.firstChild//muestra el nodo anterior al item
    console.log(item, chilNode)
    fragment.insertBefore(li, chilNode) //recibe el nuevo nodo y la referenciadel nodo
})
lista.appendChild(fragment)

