
const encabezado = document.querySelector('#Encab')
encabezado.textContent = "Hola al Dom (Document Object Model)"
// var navbar = document.querySelector('nav')
// var navegacion = document.createElement('li')
// navbar.appendChild(navegacion);
// const text = document.createTextNode("Metodos para Crear Nodos")
// navegacion.appendChild(text)

const lista = document.getElementById('lista')
const arrayElement = ['Metodos para Crear Nodos', 'Metodos para seleccionar Nodos', 'Metodos para eliminar Nodos', 'Eventos para Interactuar con Nodos']
arrayElement.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    //agrega un elemento hijo
    lista.appendChild(li)
})

var div = document.querySelector('div');
var parrafo = document.createElement('p')
div.appendChild(parrafo);
const text = document.createTextNode("Mediante el método .createElement() podemos crear un elemento HTML en memoria (¡no estará insertado aún en nuestro documento HTML!). Con dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.")
parrafo.appendChild(text)

var div = document.querySelector('div');
var parrafo = document.createElement('p')
div.appendChild(parrafo);
const text1 = document.createTextNode("Mediante el método .createElement() podemos crear un elemento HTML en memoria (¡no estará insertado aún en nuestro documento HTML!). Con dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para posteriormente insertarlo en una posición determinada del DOM o documento HTML.")
parrafo.appendChild(text)


//Style
encabezado.style.display = 'flex';
encabezado.style.justifyContent = "space-around";
lista.style.display = 'flex';
lista.style.justifyContent = "space-evenly";
