const express = require('express');
const router = express.Router();
const productsController= require('../controllers/productsControllers');


module.exports =function(){ 
//Obtiene todos los productos de la BBDD

    router.get('/products',
        productsController.obtenerProductos
        
    )
//Obtiene el name de producto de la BBDD
    router.get('/products/:name',
    productsController.obtenerProducto
    )


    
    // Obtiene el ID de producto de la BBDD
    
     router.get('/products/:price',
    productsController.obtenerProducto
    )
    



    return router;
}