const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/database');
const bodyParser = require('body-parser');

app.use(bodyParser.json());



db.authenticate()
.then(() => console.log('Database connected...'))
.catch(err => console.log('Error'+err))



app.set("json spaces",4);

const index= require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/',index);
app.use('/clientes', clientes);


app.get("/", (req,res)=> res.json({status: "Nodejs backend"}));

app.listen(PORT, ()=> console.log("escutando na porta "+PORT));
