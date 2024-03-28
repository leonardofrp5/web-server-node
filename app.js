require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// midelwere - Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Inicio',
    apellido: 'Home'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Generica',
    apellido: 'Generic'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Elementos',
    apellido: 'elements'
  });
});

app.get('/otra-ruta', (req, res) => {
  res.send(`Se esta usando el puerto ${port}`);
});

app.get('*', (req, res) => {
  res.send('404 |  Página no encontrada');
});

app.listen(port, () => {
  console.log(`Se esta usando el puerto ${port}`);
});
