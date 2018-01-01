$(document).ready(function () {
  $(".view5").hide();
  /**Splash*/
  $('.title').delay(2000).fadeOut("slow");


/**Activación de boton2 signup*/
$(".view5").hide();
$(".view4").hide();
$(".view3").hide();
$(".view2").hide();
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
$(".view3").hide();
$('.code').click(function(e) {
  var yourcode = (Math.floor(Math.random() * 900) + 100);
  alert("Tu" + " " + "código" + " " + "es" + " " + "LAB" + "-" + yourcode);
  $(".view3").show();
  $(".view2").hide();
  $("#partitioned").on("keyup", function() {
  $(".next2").prop("disabled", true);
  if( $("#partitioned").val() == (yourcode)) {
  $(".next2").prop("disabled", false);
 }
});
});
/**Función del icono atrás*/
$(".backicotwo").click(function () {
  $(".view2").show();
  $(".view3").hide();
});
$(".next2").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view4").show();
});

/**Cuarta vista*/
$(".back3").click(function(){
  $(".view4").hide();
  $(".view3").show();
  $(".view2").hide();
  $(".view1").hide();
});

$(".checkbox").on("click", function() {
  $(".next3").prop("disabled", false);
});
$(".next3").click(function(){
  $(".view3").hide();
  $(".view2").hide();
  $(".view5").show();
  $('.view5').delay(2000).fadeOut("slow");
  $(".view4").hide();
  $(".view3").hide();
  $(".view2").hide();
  $(".view1").show();
});
});