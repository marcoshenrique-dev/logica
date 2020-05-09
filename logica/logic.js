
var notas = [];
notas[0] = prompt('Digite a nota 1 do aluno');
notas[1] = prompt('Digite a nota 2 do aluno');
notas[2] = prompt('Digite a nota 3 do aluno');
notas[3] = prompt('Digite a nota 4 do aluno');



const calc = (notas) => {

    var result;
    var total = notas.reduce((before , index) => parseInt(before) + parseInt(index));

    result = total / notas.length;
    return result;

}

const insert = (notas , total) => {

  var father = document.getElementById('notas');
  var td;
  var texto;

  for(var i = 0; i < 4 ; i ++){

    td = document.createElement('td');
    texto = document.createTextNode(notas[i]);
    td.appendChild(texto);
    father.appendChild(td);

  }

  td = document.createElement('td');
  texto = document.createTextNode(total);
  td.appendChild(texto);
  father.appendChild(td);


}

insert(notas , calc(notas));
