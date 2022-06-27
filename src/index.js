console.log("first")
//const express = require('express')
import express from 'express'
import ejs from 'ejs'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'



const app = express()

//m 15 
const __dirname = dirname(fileURLToPath(import.meta.url))

//console.log(__dirname) -> Ruta absoluta-> C:\Users\usuario\Desktop\Node_Fazt\src
//console.log(__dirname, '/views') usare el join

//Para decirle donde esta la carpeta de las vistas
app.set('views', join(__dirname, 'views'))
//Utilizare ejs para enviar el frontend
app.set('view engine', 'ejs')

//Utilizar indexRoutes
app.use(indexRoutes)

//Obtener informacion del servidor
//app.get('/', (req, res) => res.send('Hola'))

//Crear Rutas
/*
app.get('/', (req, res) => res.render('index'))

app.get('/about', (req, res) => res.render('about'))

app.get('/contact', (req, res) => res.render('contact'))
*/
app.listen(3000)
console.log('Server is listenin on port', 3000)

//min 20:13   Tu primer aplicación de Nodejs desde Cero (más Despliegue)