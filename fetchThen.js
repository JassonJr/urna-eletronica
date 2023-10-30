//API - Application Programming Interfaces (Interface de Programação de Aplicação)
// JSON - JavaScript Object Notation (Notação de Objeto em JavaScript)

fetch('https://viacep.com.br/ws/04082000/json/')
.then(response => console.log(response.json()))

fetch('./chapolin.json')
.then(res => console.log(res))