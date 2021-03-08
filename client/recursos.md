material ui:

tabla
paginacion



para lanzar dos servidores a ala vez:

Para poder lanzar ambos servidores, vamos a instalar un paquete llamado concurrently, que nos va a permitir ejecutar ambos servidores con un solo comando:

npm install -S concurrently
Ahora, modificamos los scripts dentro de package.json, para que queden de esta manera:

"scripts": {
  "start": "node index.js",
  "server": "nodemon index.js",
  "client": "npm run start --prefix client",
  "dev": "concurrently \"npm run server\" \"npm run client\""
},
Y ya podemos lanzar los dos servidores con un mismo comando:

npm run dev

... mas info: https://docs.mikelgoig.com/nodejs/react.html#modo-de-desarrollo-utilizando-dos-servidores-a-la-vez-react-y-express

