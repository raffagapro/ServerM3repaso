const pendientesBD = [
    {
        id: 0,
        status: true,
        title: 'Hacer la tarea'
    }
];

const createPendiente = (req, res)=>{};
const readPendiente = (req, res)=>{
    const { id } = req.params;
    const foundPendiente = pendientesBD.find((pen)=> pen.id === parseInt(id));
    if (!foundPendiente) return res.sendStatus(400);
    res.json({
        result: foundPendiente
    });
};
const modifyPendiente = (req, res)=>{};
const deletePendiente = (req, res)=>{};

module.exports = {
    createPendiente,
    readPendiente,
    modifyPendiente,
    deletePendiente
};