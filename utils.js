let IdCounter = 0;

const IdCreator = ()=>{
    IdCounter = IdCounter++;
    return IdCounter;
}

module.exports = {
    IdCreator,
}