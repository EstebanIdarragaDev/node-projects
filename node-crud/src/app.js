const express = require('express');
const mogoose = require('mongoose');
const bookRoutes = require('./routes/book.routes')
const bodyParser = require('body-parser');

// Configuro las variables de entorno
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config();

// usamos express para los middlewares
const app = express();
app.use(bodyParser.json()) // parseador de bodies

const port = process.env.PORT || 3000;


// Conexion a la base de datos
mongoose.connect(process.env.MONGO_URL,{dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books', bookRoutes);




app.listen(port, () => console.log(`server runs on http://localhost:${port}`))