$(document).ready(function () {

  /**Splash*/
  $('.title').delay(2000).fadeOut("slow");
});

/**Activación de boton2 signup*/
$("#btn2").click(function () {
  $(".view2").show();
  $(".view1").hide();
});

/**Segunda vista*/
/**Función del icono atrás*/
$(".backico").click(function () {
  $(".view1").show();
  $(".view2").hide();
});
/**Función de btn phonee para que acepte 9dígitos y sólo números*/
$('#phonee').keyup(function () {
  if ($(this).val().length > 9) {
    $('#submitBtn').removeAttr('disabled');
  } else {
    $('#submitBtn').attr('disabled', 'disabled');
  }
}).trigger('keyup');
$(function () {
  $('.phonee').keyup(function (e) {
    if (this.value != '-')
      while (isNaN(this.value))
        this.value = this.value.split('').reverse().join('').replace(/[\D]/i, '')
          .split('').reverse().join('');
  })
    .on("cut copy paste", function (e) {
      e.preventDefault();
    });
});

/**Tercera vista*/