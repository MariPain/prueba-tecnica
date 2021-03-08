import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';


//Components
import ProductosTabla from './Components/ProductosTabla';
import ProductoInfo from './Components/ProductoInfo';





function App() {

  //State de la app

  const [articulos, mostrarArticulos] = useState([]);
  const [infoArticulo, mostrarInfoArticulo] =useState([]);

  useEffect(()=> {
    if (articulos) {
      const consultarApi = ()=>{
        clienteAxios.get('/products')
        .then(respuesta =>{
          mostrarArticulos(respuesta.data)

        })
    }
    consultarApi();
  }
}, [articulos] );


  return (
    <Router>
      
    <Switch>
        <Route 
            exact 
            path="/"
            component={()=> <ProductosTabla articulos={articulos}/>}
        />
        <Route 
            exact 
            path="/info"
            render={(props)=>{
              const infoArticulo = articulos.filter(articulo => articulo._id === props.match.params.id)
              return (
                <ProductoInfo
                articulo={[0]}
                mostrarInfoArticulo={mostrarInfoArticulo}
                />
              )
            }}
        />
      
    </Switch>
</Router>
  )
}

export default App;
