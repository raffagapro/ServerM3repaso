function Pendiente(id, title) {
    this.id = id;
    this.status = true;
    this.title = title;
}

Pendiente.prototype.toggleStatus = () =>{
    this.status = !this.status;
}

module.exports = Pendiente;