const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const Upload = require('express-fileupload')
const db = require('./db/db')
 
   

dotenv.config({path:'./.env'})
 
const app = express()

//motor de templete
app.set('view engine', 'hbs')
const public = path.join(__dirname, './public');
app.use(express.static(public));

//parse url-encode bodies(as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyparser.json());
app.use(Upload({
    createParentPath: true
})); 

// The routes  
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server start on port ${PORT}`);
})
     