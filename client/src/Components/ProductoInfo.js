import React, { Fragment } from 'react'


const ProductoInfo = (props)=>{

   


    const {articulo: {_id, name, raiting, price, description, maker}} = props


    return (
        <Fragment>
        <p>Aqui la descripción de articulo</p>
        </Fragment> 
        
        
        
        
    )
}

export default ProductoInfo;