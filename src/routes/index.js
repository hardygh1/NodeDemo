//Definir distintas rutas
import { Router } from 'express'
const router = Router()

//app.get('/', (req, res) => res.render('index'))

router.get('/', (req, res) => res.render('index',{title: 'First sitio con Node', x: 30}))

router.get('/about', (req, res) => res.render('about',{title: 'About Me'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'Contact Page'}))

export default router