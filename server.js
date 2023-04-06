const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// Define routes
let index = require('./routes/index');
let image = require('./routes/image');
let mongoUrl = require('./_config');


// // connecting the database
// let mongodb_url = 'mongodb+srv://Gloria:Airolg@gallery.iq1mgvs.mongodb.net/darkroom?retryWrites=true&w=majority';

// let dbName = 'darkroom';
mongoose.connect(`${mongoUrl.mongoURI.development}`,{ useNewUrlParser: true , useUnifiedTopology: true }, (err)=>{
    if (err) console.log(err)
});

// test if the database has connected successfully
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Initializing the app
const app = express();


// View Engine
app.set('view engine', 'ejs');

// Set up the public folder;
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(express.json())


app.use('/', index);
app.use('/image', image);


 
const PORT = process.env.PORT || 5000;
app.listen(PORT,() =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});

module.exports = app;