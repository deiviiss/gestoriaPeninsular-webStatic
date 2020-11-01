document.querySelector('.header__logo--btnDesktop').addEventListener('click', () => {
  console.log('Click')
  document.querySelector('.nav').classList.toggle('show')
})

let cantidadARetirar = document.getElementById("cantidadRetiro");
let btnCalcular = document.getElementById("btnCalcular")

btnCalcular.addEventListener("click", calcularRetiro)

function calcularRetiro() {
  let aseguramiento;
  let asesoria;

  let cantidad = cantidadARetirar.value;


  if (cantidad > 30999) {

    let cobro = cantidad * .25;
    alert("Asesoría: $" + cobro + "\n" + "Aseguramiento: Incluido\n" + "Total: $" + cobro)
  }

  else if (cantidad > 24999) {

    let cobro = cantidad * .20;
    let aseguramiento = 2000
    let cobroCliente = cobro + aseguramiento

    alert("Asesoría: $" + cobro + "\n" + "Aseguramiento: $" + aseguramiento + "\n" + "Total: $ " + cobroCliente)
  }

  else if (cantidad > 14999) {
    let cobro = cantidad * .20;
    let aseguramiento = 1700
    let cobroCliente = cobro + aseguramiento;

    alert("Asesoría: $" + cobro + "\n" + "Aseguramiento: $" + aseguramiento + "\n" + "Total: $" + cobroCliente)
  }

  else {
    let cobro = cantidad * .20
    let aseguramiento = 1300
    let cobroCliente = cobro + aseguramiento

    alert("Asesoría: $" + cobro + "\n" + "Aseguramiento: $" + aseguramiento + "\n" + "Total: $" + cobroCliente)
  }

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