const express = require('express');
const clientiRoutes = require('./src/routes/clienti.routes');
const articoliRoutes = require('./src/routes/articoli.routes');
const venditeRoutes = require('./src/routes/vendite.routes');
const errorMiddleware = require('./src/middlewares/error.middleware');

const app = express();

app.use(express.json());

// ROUTES
app.use('/api/clienti', clientiRoutes);
app.use('/api/articoli', articoliRoutes);
app.use('/api/vendite', venditeRoutes);

// ERROR HANDLER
app.use(errorMiddleware);

module.exports = app;