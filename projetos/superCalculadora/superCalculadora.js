function calcular() {
    var numA = document.getElementById('numA').value;
    var numB = document.getElementById('numB').value;
    var soma = parseInt(numA) + parseInt(numB);
    var subtracaoA = parseInt(numA) - parseInt(numB);
    var subtracaoB = parseInt(numB) - parseInt(numA);
    var multiplicacao = parseInt(numA) * parseInt(numB);
    var divisaoA = parseInt(numA) / parseInt(numB);
    var divisaoB = parseInt(numB) / parseInt(numA);
    var potenciaA = Math.pow(parseInt(numA), parseInt(numB));
    var potenciaB = Math.pow(parseInt(numB), parseInt(numA));
    var raizA = Math.sqrt(parseInt(numA));
    var raizB = Math.sqrt(parseInt(numB));
    var fatorialA = 1;
    for (var i = 1; i <= numA; i++) {
      fatorialA = fatorialA * i;
    }
    var fatorialB = 1;
    for (var i = 1; i <= numB; i++) {
      fatorialB = fatorialB * i;
    }
    var porcentagemA = (parseInt(numA) * 100) / parseInt(numB);
    var porcentagemB = (parseInt(numB) * 100) / parseInt(numA);
    var media = (parseInt(numA) + parseInt(numB)) / 2;
    document.getElementById('resultado').innerHTML =
      '<div class="resultadoEstilo">Primeiro Número (A): ' +
      '<p class="paragrafoJV">' +
      numA +
      '</div><div class="resultadoEstilo">Segundo Número (B): ' +
      '<p class="paragrafoJV">' +
      numB +
      '</div><div class="resultadoEstilo">Soma: ' +
      '<p class="paragrafoJV">' +
      soma +
      '</div><div class="resultadoEstilo">Subtração A - B: ' +
      '<p class="paragrafoJV">' +
      subtracaoA +
      '</div><div class="resultadoEstilo">Subtração B - A: ' +
      '<p class="paragrafoJV">' +
      subtracaoB +
      '</div><div class="resultadoEstilo">Multiplicação: ' +
      '<p class="paragrafoJV">' +
      multiplicacao +
      '</div><div class="resultadoEstilo">Divisão A/B: ' +
      '<p class="paragrafoJV">' +
      divisaoA +
      '</div><div class="resultadoEstilo">Divisão B/A: ' +
      '<p class="paragrafoJV">' +
      divisaoB.toFixed(2) +
      '</div><div class="resultadoEstilo">Potência de A na base B: ' +
      '<p class="paragrafoJV">' +
      potenciaA +
      '</div><div class="resultadoEstilo">Potência de B na base A: ' +
      '<p class="paragrafoJV">' +
      potenciaB +
      '</div><div class="resultadoEstilo">Raiz quadrada de A: ' +
      '<p class="paragrafoJV">' +
      raizA.toFixed(2) +
      '</div><div class="resultadoEstilo">Raiz quadrada de B: ' +
      '<p class="paragrafoJV">' +
      raizB.toFixed(2) +
      '</div><div class="resultadoEstilo">Fatorial de A: ' +
      '<p class="paragrafoJV">' +
      fatorialA +
      ' <div>Fatorial de B: ' +
      '<p class="paragrafoJV">' +
      fatorialB +
      '</div></div><div class="resultadoEstilo">Porcentagem de A em relação a B: ' +
      '<p class="paragrafoJV">' +
      porcentagemA.toFixed(2) +
      '%</div><div class="resultadoEstilo">Porcentagem de B em relação a A: ' +
      '<p class="paragrafoJV">' +
      porcentagemB.toFixed(2) +
      '%</div><div class="resultadoEstilo">Média: ' +
      '<p class="paragrafoJV">' +
      media +
      '</div>';
  }

  function limpar() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
    document.getElementById('resultado').innerHTML = '';
  }
  
  document.getElementById('btnCalcular').addEventListener('click', calcular);
  document.getElementById('btnLimpar').addEventListener('click', limpar);
  