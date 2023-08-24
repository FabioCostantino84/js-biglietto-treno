/* 
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.

##tool
-prompt x2
-number
-let/const
-if/else
-console log
*/



// chiedere all'utente quanti km deve percorrere
const distance = Number(prompt('type distance in km'));

// chiedere l'età dell'utente
const userAge = Number(prompt('type yuor age'));

let priceKm = Number(0.21);

let totalPrice;

if (userAge < 18) {
    // calcolo prezzo minorenni
    underDiscount = Number(0.21 * 20 / 100);
    totalPrice = Number(distance * (priceKm - underDiscount));

} else if (userAge > 65 - 1) {
    // calcolo prezzo over 65
    overDiscount = Number(0.21 * 40 / 100);
    totalPrice = Number(distance * (priceKm - overDiscount));
    console.log(totalPrice);
} else {
    // calcolo prezzo intero
    totalPrice = Number(distance * priceKm);
    console.log(totalPrice);
}
// stampo il prezzo del biglietto
document.getElementById('price').innerHTML = totalPrice.toFixed(2);

