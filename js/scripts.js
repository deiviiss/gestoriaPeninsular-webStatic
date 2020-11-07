document.querySelector('.header__logo--btnDesktop').addEventListener('click', () => {
  console.log('Click')
  document.querySelector('.nav').classList.toggle('show')
})

let cantidadARetirar = document.getElementById("cantidadRetiro");
let btnCalcular = document.getElementById("btnCalcular")


// eventos

btnCalcular.addEventListener("click", calcularRetiro)


//función para calcular cotización

function calcularRetiro(e) {
  let cantidad = cantidadARetirar.value;

  if (cantidad > 30999) {

    let cobro = cantidad * .25;
    let mensaje = "Asesoría: $" + cobro + "<br/>" + "Aseguramiento: Incluido <br/>" + "Total: $" + cobro

    alertify.alert('Cotización', mensaje);
  }

  else if (cantidad > 24999) {

    let cobro = cantidad * .20;
    let aseguramiento = 2000
    let cobroCliente = cobro + aseguramiento
    let mensaje = "Asesoría: $" + cobro + "<br/>" + "Aseguramiento: $" + aseguramiento + "<br/>" + "Total: $ " + cobroCliente

    alertify.alert('Cotización', mensaje)
  }

  else if (cantidad > 14999) {
    let cobro = cantidad * .20;
    let aseguramiento = 1700
    let cobroCliente = cobro + aseguramiento;
    let mensaje = "Asesoría: $" + cobro + "<br/>" + "Aseguramiento: $" + aseguramiento +
      "<br/>" + "Total: $" + cobroCliente


    alertify.alert('Cotización', mensaje)
  }

  else {
    let cobro = cantidad * .20
    let aseguramiento = 1300
    let cobroCliente = cobro + aseguramiento
    let = "Asesoría: $" + cobro + "<br/>" + "Aseguramiento: $" + aseguramiento + "<br/>" + "Total: $" + cobroCliente

    alertify.alert('Cotización', mensaje)
  }

  e.preventDefault()

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