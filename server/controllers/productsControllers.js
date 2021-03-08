const Products = require('../models/Products');

/** Obtiene todos los productos */

exports.obtenerProductos = async (req, res, next) => {
    try {
        const products = await Products.find({});
        res.json(products);
    } catch (error) {
        console.log(error);
        next();
    }
}

/** Obtiene un paciente en especifico por su ID */
exports.obtenerProducto = async (req, res, next) => {
    try {
        const product = await productsSchema.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.log(error);
        next();
    }
}





 