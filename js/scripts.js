
//menu hamburger

document.querySelector('.header__logo--btnDesktop').addEventListener('click', () => {
  console.log('Click')
  document.querySelector('.nav').classList.toggle('show')
})

document.querySelector('.header__logo--btnMobile').addEventListener('click', () => {
  console.log('Click')
  document.querySelector('.nav').classList.toggle('show')
})

// función para enviar mensaje

function mandarAlert(mensaje) {
  alertify.alert('Cotización GP', mensaje);
}

//function focus & blur

document.querySelector('input').addEventListener('focus', () => {
  console.log('focus');
  document.querySelector('.label').classList.toggle('active')
})

document.querySelector('input').addEventListener('blur', () => {
  console.log('Blur')
  document.querySelector('.label').classList.toggle('active')
})

//>>>>>>>>>>>>>>>>>>calculadora

//=================================== funciones para validar sucursal

//valida sucursal para calcular comisión de asesor

function calcularComision() {
  let sucursalComision = sucursal.value

  if (sucursalComision == "comisionLocal") {
    comisionLocal()
  }

  else if (sucursalComision == "comisionForanea") {
    comisionForanea()
  }
  else {

    let mensaje = "Elige una sucursal"

    mandarAlert(mensaje)
  }
}
//valida sucursal para calcular retiro

function calcularRetiro() {
  let sucursalRetiro = sucursal.value

  if (sucursalRetiro == "retiroLocal") {
    calcularRetiroLocal()
  }

  else if (sucursalRetiro == "retiroForaneo") {
    calcularRetiroForaneo()
  }
  else {

    let mensaje = "Elige una sucursal"

    mandarAlert(mensaje)
  }

}


//=================================== funciones para calcular operaciones

//función para calcular comisión local

function comisionLocal() {
  let cantidad = cantidadARetirar.value;

  if (cantidad > 36965) {
    let comision = cantidad * .05

    let mensaje = "Comisión: $" + comision.toFixed(2)

    mandarAlert(mensaje)
  }
  else if (cantidad > 30800) {
    let comision = 1500

    let mensaje = "Comisión: $" + comision.toFixed(2)

    mandarAlert(mensaje)
  }
  else if (cantidad > 12000) {
    let comision = 1000

    let mensaje = "Comisión: $" + comision.toFixed(2)

    mandarAlert(mensaje)
  }
  else if (cantidad > 0) {
    let mensaje = "Comisión: $500.00"

    mandarAlert(mensaje)
  }
  else {
    let mensaje = "Escribe una cantidad"

    mandarAlert(mensaje)
  }
}

//función para calcular comisión foranéa

function comisionForanea() {
  let cantidad = cantidadARetirar.value


  if (cantidad == "") {
    let mensaje = "Escribe una cantidad"

    mandarAlert(mensaje)
  }

  else {
    c
  }
}

//función para calcular retiro local

function calcularRetiroLocal() {
  let cantidad = cantidadARetirar.value;

  if (cantidad > 30999) {
    let cobro = cantidad * .25;
    let libreCliente = cantidad - cobro


    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: Incluido <br/>" + "Total cobro: $" + cobro.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 24999) {
    let cobro = cantidad * .20;
    let aseguramiento = 2000
    let cobroCliente = cobro + aseguramiento
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) + "<br/>" + "Total: $ " + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 14999) {
    let cobro = cantidad * .20;
    let aseguramiento = 1700.00
    let cobroCliente = cobro + aseguramiento;
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) +
      "<br/>" + "Total: $" + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 0) {
    let cobro = cantidad * .20
    let aseguramiento = 1300
    let cobroCliente = cobro + aseguramiento
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) + "<br/>" + "Total: $" + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else {
    let mensaje = "Escribe una cantidad"

    mandarAlert(mensaje)
  }

  // e.preventDefault()

}

//función para calcular retiro foraneo

function calcularRetiroForaneo() {
  let cantidad = cantidadARetirar.value;

  if (cantidad > 30999) {
    let cobro = cantidad * .30;
    let libreCliente = cantidad - cobro


    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: Incluido <br/>" + "Total cobro: $" + cobro.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 24999) {
    let cobro = cantidad * .25;
    let aseguramiento = 2000
    let cobroCliente = cobro + aseguramiento
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) + "<br/>" + "Total: $ " + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 14999) {
    let cobro = cantidad * .25;
    let aseguramiento = 1700.00
    let cobroCliente = cobro + aseguramiento;
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) +
      "<br/>" + "Total: $" + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else if (cantidad > 0) {
    let cobro = cantidad * .25
    let aseguramiento = 1300
    let cobroCliente = cobro + aseguramiento
    let libreCliente = cantidad - cobroCliente

    let mensaje = "Asesoría: $" + cobro.toFixed(2) + "<br/>" + "Aseguramiento: $" + aseguramiento.toFixed(2) + "<br/>" + "Total: $" + cobroCliente.toFixed(2) + "<br/>" + "<br/>" + "Cliente: $" + libreCliente.toFixed(2)

    mandarAlert(mensaje)
  }

  else {
    let mensaje = "Escribe una cantidad"

    mandarAlert(mensaje)
  }
}