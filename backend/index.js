const express = require('express');
/*
const clientiRoutes = require('./routers/clienti.routes');
const articoliRoutes = require('./routers/articoli.routes');
const venditeRoutes = require('./routers/vendite.routes');
const errorMiddleware = require('./middlewares/error.middleware');
*/
require("dotenv").config()

const app = express();

app.use(express.json());

// ROUTES
/*
app.use('/api/clienti', clientiRoutes);
app.use('/api/articoli', articoliRoutes);
app.use('/api/vendite', venditeRoutes);

// ERROR HANDLER
app.use(errorMiddleware);
*/
const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});