// This is a JavaScript file

var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";
// capturar número selecionado
$(document).on('click','.num', function(){
// voltar o valor da ação/botão
  var n = $(this).html();
  display +=n;
  $('#display').html(display);
  
});
// função para limpar a tela
function CE(){
  display = "";
  $('#display').html(0);
}
// capturar operação de limpar tela
$(document).on('click', '.ce', function(){
  CE();
});
// capturar operação desejada
$(document).on('click', '.ope', function(){
  n1 = display;
  ope = $(this).html();
  CE();
});
// operação soma
$(document).on('click', '.calcular', function(){
  n2 = display;
  if(ope == "+"){
    var resultado = parseFloat(n1)+parseFloat(n2);
    $('#display').html(resultado);
  }
  // outras operações, continuar conta a partir do primeiro resultado
  display = resultado;

});
