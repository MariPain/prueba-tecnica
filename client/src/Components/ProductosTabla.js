import React, { useState, useEffect, Fragment } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';


const columns = [
    { field: 'ARTICULO', headerName: 'name', width: 200 },
    { field: 'RELEVANCIA', headerName: 'ratin', width: 130 },
    { field: 'PRECIO', headerName: 'price', width: 50 }
   
   
  ]
  const rows = [
      {id: 1,name: 'patatas', ratin:'' ,price:''},
      {id: 2,name: 'limones', ratin:'' ,price:''},
      {id: 3,name: 'naranjas', ratin:'' ,price:''}
  ]
const ProductosTabla = ({articulos})=>{

//meter datos de mongo aqui
   
    return (
       <Fragment>
           <h1>Lista de productos</h1>
           <DataGrid rows={rows} columns={columns} pageSize={10}/>
           
       </Fragment>
    )
}

export default ProductosTabla;