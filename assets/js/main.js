/* 
DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS.
*/

/* 
tool:
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
console.log(distance, userAge);

// calcolo prezzo intero
const priceKm = Number(0.21);
const fullPrice = Number(distance * priceKm);
console.log(fullPrice);

// calcolo prezzo minorenni
const underDiscount = Number(0.21 * 20 / 100);
const underPrice = Number(distance * (priceKm - underDiscount));
document.getElementById ('price').innerHTML = underPrice.toFixed (2);
console.log(underPrice);

// calcolo prezzo over 65
const overDiscount = Number(0.21 * 40 / 100);
const overPrice = Number(distance * (priceKm - overDiscount));
document.getElementById ('price').innerHTML = overPrice.toFixed (2);
console.log(overPrice);
// stampo il prezzo del biglietto

