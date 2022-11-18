let IdCounter = -1;

const IdCreator = ()=>{
    IdCounter = IdCounter++;
    return IdCounter;
}

module.exports = {
    IdCreator,
}