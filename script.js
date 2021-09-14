/*var nome = "Virginia"
var notaDoPrimeiroBimestre = 9.4355
var notaDoSegundoBimestre = 7.234
var notaDoTerceiroBimestre = 4.234
var notaDoQuartoBimestre = 2.183

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4


var notaFixada = notaFinal.toFixed(1)


console.log("Bem vindo " + nome)
console.log(notaFixada)

//isso é um comecomentário 

//Revisão 
//variáveis,strings, console.log, toFixed, operações matemática, concatenação*/
var totalBimestres = parseInt(prompt("Quantidade de bimestres?")); //prompt é para exibir uma caixa de texto junto com parseInt cuando a caixa de texto recebe numeros
var numero = 1;
var totalNotas = 0;

while(numero <= totalBimestres){

    var notas = parseInt(prompt("Informe notas por bimestre")); //ja o programa entende que vai pegar todas as notas que seram informadas e fara a suma delas
    totalNotas = totalNotas + notas;
    numero++; //numero = numero + 1
}

var mediaTotalNota = totalNotas/totalBimestres;
var notaFixada = mediaTotalNota.toFixed(0);
console.log("A media de nota de todas as provas é " + notaFixada);

if(mediaTotalNota > 5) {
        document.write("Parabéns, voce foi aprovado sua media de notas é " + notaFixada);
        }
if(mediaTotalNota < 4) {
        document.write("Infelizmente voce não foi aprovado, continue estudando sua media total de nota é" + notaFixada);
}