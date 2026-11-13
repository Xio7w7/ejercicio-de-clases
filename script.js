const numeroElegido = 8;
const limite = 10;

function multiplicar(numero, multiplicador) {
  return numero * multiplicador;
}

function generarTabla(numero, hasta) {
  const filas = [];
  for (let i = 1; i <= hasta; i++) {
    filas[filas.length] = {
      operacion: numero + ' x ' + i,
      resultado: multiplicar(numero, i)
    };
  }
  return filas;
}

function mostrarEnConsola(numero, filas) {
  console.log('Tabla de multiplicar del ' + numero);
  for (let i = 0; i < filas.length; i++) {
    console.log(filas[i].operacion + ' = ' + filas[i].resultado);
  }
  console.table(filas);
}

function mostrarEnPagina(numero, filas) {
  document.getElementById('subtitulo').textContent = 'Tabla del ' + numero + ', del 1 al ' + filas.length;
  const cuerpoTabla = document.getElementById('cuerpo-tabla');

  for (let i = 0; i < filas.length; i++) {
    const fila = document.createElement('tr');
    const celdaOperacion = document.createElement('td');
    const celdaResultado = document.createElement('td');

    celdaOperacion.textContent = filas[i].operacion;
    celdaResultado.textContent = filas[i].resultado;

    fila.appendChild(celdaOperacion);
    fila.appendChild(celdaResultado);
    cuerpoTabla.appendChild(fila);
  }
}

const tablaGenerada = generarTabla(numeroElegido, limite);
mostrarEnConsola(numeroElegido, tablaGenerada);
mostrarEnPagina(numeroElegido, tablaGenerada);
