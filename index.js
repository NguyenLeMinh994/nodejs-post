const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},   
    ()=>console.log('connect to db')
);
// View 
app.set('view engine', 'pug');
app.set('views','./view');
// Import Route
const authAPIRoute = require('./routes/api/auth');
const postAPIRoute = require('./routes/api/posts');

const postRoute = require('./routes/posts');

// Middleware
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')))

// Route Middleware
app.use('/api/user',authAPIRoute);
app.use('/api/posts',postAPIRoute);
app.use('/posts',postRoute);

// app.use('/posts',);

const port = process.env.port || 4000;
app.listen(port, ()=> console.log("Server is run"))