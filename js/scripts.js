document.querySelector('.header__logo--btnDesktop').addEventListener('click', () => {
  console.log('Click')
  document.querySelector('.nav').classList.toggle('show')
})


var valor = document.getElementById("cantidadRetiro");
var boton = document.getElementById("boton")
var cantidad1;

boton.addEventListener("click", calcularRetiro)

function calcularRetiro() {
  var cantidad1 = valor.value;





  alert(cantidad1);
}



