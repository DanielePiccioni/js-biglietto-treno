/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60


PRO TIP:
prima di iniziare a scrivere codice, inizia con l'elencare gli strumenti da usare per svolgere la consegna e scoponi  il problema di sotto-task da svolgere. Questo ti aiuta a documentare il tuo flusso di lavoro ed il codice evitandoti di restare li a fissare una pagina vuota.
*/

/* 
TOOLS:
- Variabili let / const (prompt)
- operaatore di relazione ( < > =)
-if / else
- alert / log

*/


/*Dati dell'utente*/
// Variabile km che vuole percorrere
const km = Number(prompt("Quanti km vuoi percorrere?"));
// Variabile età del passeggero
const eta = Number(prompt("Quanti anni hai?"));



/* Calcolare prezzo del prezzo*/
// Variabile del prezzo biglietto
const prezzoalkm = 0.21;
// Variabile km * prezzo al km
let prezzototale = km * prezzoalkm;

console.log(km);
console.log(eta);
console.log(prezzoalkm);
console.log(prezzototale);

/* Sconti*/
// Sconto minorenni 20%

// Sconto over 65 40%


/* Output prezzo finale con massimo due decimali*/



