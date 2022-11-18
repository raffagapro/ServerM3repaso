const { IdCreator } = require('../utils');
const Pendiente = require('../Modelos/Pendiente');

const pendientesBD = [
    {
        id: 0,
        status: true,
        title: 'Hacer la tarea'
    }
];

const createPendiente = (req, res)=>{
    const { title } = req.body;
    if (!title) return res.status(400).json({error: 'No se encontro un titulo'});
    const newID = IdCreator();
    const newPendiente = new Pendiente(newID, title);
    pendientesBD.push(newPendiente);
    res.json({
        result: newPendiente
    });
};

const readPendiente = (req, res)=>{
    const { id } = req.params;
    const foundPendiente = pendientesBD.find((pen)=> pen.id === parseInt(id));
    if (!foundPendiente) return res.sendStatus(400);
    res.json({
        result: foundPendiente
    });
};
const modifyPendiente = (req, res)=>{
    const { id } = req.params;
    const test = 'Perro';
    if (isNaN(parseInt(id))) return res.status(400).json({error: 'No se mando un id valido'});
    const { title, status } = req.body;
    const foundPendiente = pendientesBD.find((pen)=> pen.id === parseInt(id));
    if (!foundPendiente) return res.status(400).json({error: 'No se encontro un pendiente con ese ID'});
    if (title) foundPendiente.title = title;
    if (status) foundPendiente.status = status;
    res.json({
        result: foundPendiente
    });
};

const deletePendiente = (req, res)=>{};

module.exports = {
    createPendiente,
    readPendiente,
    modifyPendiente,
    deletePendiente
};