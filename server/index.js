const mongoose =require('mongoose');
const app = require ('./app');
const PORT = process.env.PORT || 3000;
const {API_VERSION, IP_SERVER, PORT_DB} = require('./config');
const productsSchema = require('./models/productsSchema');


const bdConnection = require('./connectionDb');
const bdSchema = require('./models/productsSchema');

const productobd = new productsSchema({
    name: 'platano',
    description:'platano canario',
    price:'99',
    maker : {
        name: 'fabricante de platanos',
        cif:"Q7627221J",
        adress:''
    }
});
// productobd.save();





////----REVISA TODO ESTE CODIGO COMENTADO-----
mongoose.connect(`mongobd://${IP_SERVER}:${PORT_DB}/productos`,
{useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true}
//, (err, res)=>{
//     if(err)throw err;
//     
//         console.log('conexión base de datos correcta.');
//         app.listen(port, ()=> {
//             console.log('####################');
//             console.log('#### API REST ####');
//             console.log('####################');
//             console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`)

//                 })
//             }
// }
);


