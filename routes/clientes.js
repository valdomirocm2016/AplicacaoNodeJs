const express = require('express');
const Cliente = require('../models/clientes');
const router = express.Router();

router.get("/", (req,res) =>
    Cliente.findAll()
       .then(result => res.json(result))
       .catch(error => {
            res.status(412).json({msg: error.message});
       }));

 
 
 

module.exports=router;