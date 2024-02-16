// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenti = [];
let soloAmbassador = [];
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!

let costoFinale = 0;

utenti.push(marco, paul, amy);

for (let i = 0; i < prices.length; i++) {
  let prezzo = prices[i]; //creo variabile per inserire il prezzo di ogni valore dell'array
  costoFinale += prezzo; //somma dei valori dell'array
}
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  costoFinale = costoFinale * 0.7;
}
if (costoFinale <= 100) {
  costoFinale += shippingCost;
}
console.log("Il costo finale del carrello è " + costoFinale + " €");

for (i = 0; i < utenti.length; i++) {
  let utente = utenti[i];

  let messaggio = `${utente.name} ${utente.lastName}  ${
    utente.isAmbassador ? "è un ambassador" : "non è un ambassador"
  }`; //stampa nome e cognome + chiede utenteX è ambassador? si ? allora stampa è un ambassador se no stampa l'altro
  console.log(messaggio);
}

for (let i = 0; i < utenti.length; i++) {
  let utente = utenti[i];
  if (utente.isAmbassador) {
    soloAmbassador.push(utente);
  }
}
console.log(soloAmbassador);
