// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array
// 1.Creare un array vuoto
var dispari = [];
// 2.Chiedere inserimento numero
for ( var i = 0; i < 6; i++ ) {
    var num = parseInt(prompt("Inserisci un numero"));
// 3.Verificare se dispari
    if (num % 2 == 1) {
        dispari.push(num);
      }
}
// 4.Stampare numeri dispari
document.getElementById("dispari").innerHTML = dispari;
