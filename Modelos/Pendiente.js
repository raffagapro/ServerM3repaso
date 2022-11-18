function Pendiente(id, title) {
    this.id = 0;
    this.status = true;
    this.title = title;

}

Pendiente.prototype.toggleStatus = () =>{
    this.status = !this.status;
}

module.exports = Pendiente;