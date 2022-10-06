//Importar CommonJs
    const colors = require('colors')
    //const sumar = require('./sumar')
    //const estudiant = require('./estudiant')
    const materias = require('./materias')
//Importar Module
//import {sumar , restar }from './sumar.js'
//Variables
//  Let: variables
//let a = 10
//  Const: constantes
//const b = 20

//console.log(`Suma: ${ sumar(a , b) }`.rainbow.underline)
//console.log(`Resta: ${ restar(a , b) }`)

//Desestructurar objeto:
//let { first_name, last_name} = estudiant
//console.log(`name: ${ first_name }`.rainbow)

//forEach : Metodo de arrays = Recorrido del Array
materias.forEach((materia) => {
    if (materia.instructor === 'Sebastian') {
        console.log(`nombre:${ materia.name }`.blue, `instructor:${ materia.instructor}`.red)   
    }
})

//Map : Metodo de arrays = Crea un arreglo a partir de otro
const p = materias.map((materia) => {
        return materia.instructor
})
console.log(p)

//Find: Metodo de arrays = Localizar elemento(s) de un array que cumplan una condición, unicamente muestra el primer registro, para traer mas usar filter

const a = materias.find((materia) => {
    return materia.instructor === "Sebastian"
})
console.log(a)
