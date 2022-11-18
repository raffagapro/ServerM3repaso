const express = require('express');
const server = express();
const {
    createPendiente,
    readPendiente,
    modifyPendiente,
    deletePendiente
} = require('./Controller/pendiente');

const {
    readPendientes,
} = require('./Controller/pendientes');

//middle ware
server.use(express.json()); // for parsing application/json

//listas de pendientes
//Pendientes CRUD
// post (crear un penidiente)
// get (lee un pendiente)
// put (modifica un pendiente)
// delete (elimina un pendiente)

server.route('/pendiente/:id')
    .get(readPendiente)
    // .put(modifyPendiente)
    // .delete(deletePendiente);

server.post('/pendiente', createPendiente);

// server.route('/pendientes')
//     .get(readPendientes);


module.exports = server;