var vistaSimple = function(modelo) {
  this.modelo = modelo;
  this.modelo.registrarObserver(this);
}

vistaSimple.prototype.notificar = function() {
  this.mostrar();
}
vistaSimple.prototype.mostrar = function() {
  console.log('Titulo: ', this.modelo.titulo, ' Autor: ', this.modelo.autor);
}
