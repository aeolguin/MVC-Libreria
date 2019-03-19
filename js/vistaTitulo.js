var vistaTitulo = function(modelo) {
    this.modelo = modelo;
    this.modelo.registrarObserver(this);
  }

  vistaTitulo.prototype.notificar = function() {
    this.mostrar();
  }

  vistaTitulo.prototype.mostrar = function() {
    console.log('Titulo: ', this.modelo.titulo);
  }
  
  // aca solo falta instanciar la vista y el modelo para probar que funciona