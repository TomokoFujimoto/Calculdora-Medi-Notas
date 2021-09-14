var totalBimestres = parseInt(prompt("Quantidade de bimestres?")); 
var totalNotas = 0;

for(var numero = 1; numero <= totalBimestres; totalNotas = totalNotas + notas){
  var notas = parseInt(prompt("Informe notas por bimestre")); 
    numero++; 
}

var mediaTotalNota = totalNotas/totalBimestres;
var notaFixada = mediaTotalNota.toFixed(0);
console.log("A media de nota de todas as provas é " + notaFixada);

if(mediaTotalNota >= 5) {
        document.write("Parabéns, voce foi aprovado sua media de notas é " + notaFixada);
        }
if(mediaTotalNota <= 4) {
        document.write("Infelizmente voce não foi aprovado, continue estudando sua media total de nota é " + notaFixada);
    }