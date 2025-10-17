const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

// Vai buscar à pasta views um template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// (1) Midlewares

// Se o morgan estiver em dev mode, aparecem logs mais complexos no terminal
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json()); //midleware converte os requests para json
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('./public'));

app.use((req, res, next) => {
  console.log('Hello from the midleware 😊');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/* app.get('/', (req, res) => {
    res
    .status(200)
    .json({message: 'Hello from the server side!', app: 'Natours'});
}); */

// (2) Route Handlers

//app.get('/api/v1/tours', getAllTours);
//app.get('/api/v1/tours/:id', getTour);
//app.post('/api/v1/tours', createTour)
//app.patch('/api/v1/tours/:id', updateTour);
//app.delete('/api/v1/tours/:id', deleteTour)

// (3) Routes

module.exports = app;
