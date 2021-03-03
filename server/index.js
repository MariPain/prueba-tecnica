const mongoose =require('mongoose');
const app = require ('./app');
const PORT = process.env.PORT || 3000;
const {API_VERSION, IP_SERVER, PORT_DB} = require('./config');



////----REVISA TODO ESTE CODIGO COMENTADO-----
mongoose.connect(`mongobd://${IP_SERVER}:${PORT_DB}/test`,
{useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true}
//, (err, res)=>{
//     if(err){
//         throw err;
//     }else {
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


