const express = require('express');
const router = express.Router();
const productsController= require('../controllers/products.controllers');


module.exports =function(){ 
//Pide productos para mostrar 

    router.get('/',()=>{
        console.log('hola q pasa')
    })



    return router;
}