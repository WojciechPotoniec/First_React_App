export function combine(a, b, c) {
    let sum = a * b / c;
    return sum;
}
console.log(combine(10, 3, 2))
// expected output: 15

const hobbies = ['sports', 'cooking', 'music']
const editedHobbies = hobbies.map((item) => ({item: item}))
console.log(editedHobbies);
// expected output: [{item: 'sports'}, {item: 'cooking'}, {item: 'music'}]

export function transformToObjects(numberArray) {
    const numberObject = numberArray.map((number) => ({value: number}));
    return numberObject;
 }

 const array = [1, 2, 3];
 console.log(transformToObjects(array));
 // expected output: [{value: 1}, {value: 2}, {value: 3}]

 
 const number = [1, 2, 3, 4, 5];

 const sum = number.reduce((acc, currValue) => acc + currValue, 0);

 console.log(sum);

 const text = ['ciao', 'come', 'stai?'];

 const mergedText = text.reduce((acc, currValue) => acc + currValue);

 console.log(mergedText);


// map() - Trasformazione degli elementi
// Esercizio: Dato un array di stringhe che rappresentano nomi, trasforma ogni nome in maiuscolo. 

const names = ['mario', 'luigi', 'peach', 'bowser'];

const capitalizedNames = names.map((name) => name.charAt().toUpperCase() + name.slice(1));
console.log(capitalizedNames);
// Expected output dato l'array di stringhe ho combinato diversi metodi per poter rimappare e creare un nuovo array di nomi con le lettere maiuscole.
// .map rimappa e crea un nuovo array | .charAt recupera di default il primo elemento e lo restituisce in questo caso le lettere 'm','l','p','b' | toUpperCase rende maiuscoli questi elementi | e aggiungendo name.slice partendo dalla posizione numero 1 aggiunge il resto dei caratteri mancanti in questo caso.

// find() - Trovare un elemento
// Esercizio: Dato un array di oggetti che rappresentano prodotti, trova il prodotto con il prezzo uguale a 100.

const products = [
    { name: 'Smartphone', price: 300 },
    { name: 'Cuffie', price: 50 },
    { name: 'Tastiera', price: 100 }
  ];

  const findedProduct = products.find((product) => product.price === 100);

  console.log(findedProduct);
// Expected output object at the 2 index position, perchè il metodo find restituisce da un array di obj il prodotto che rispetta la condizione posta sul prezzo.


// findIndex() - Trovare l'indice di un elemento
// Esercizio: Dato un array di numeri, trova l'indice del primo numero pari.

const numbers = [5, 3, 7, 6, 8];

const evenNumber = numbers.findIndex((number) => number % 2 === 0);

console.log(evenNumber);
// Expected output è 3 perchè trova l'indice del numero all'interno dell'array che diviso per 2 porta come risultato 0 quindi risulta un numero pari.

// reduce() - Accumulare i valori
// Esercizio: Dato un array di numeri, trova il prodotto di tutti i numeri (moltiplicali tra di loro).

const arrayNumbers = [2, 3, 4, 6];

const productOfNumber = arrayNumbers.reduce((previousValue, currentNumber) => previousValue * currentNumber);

console.log(productOfNumber);
// Expected output è 144 perchè la moltiplicazione avviene partendo dal primo elemento finche non finiscono. in questo caso senza valore iniziale passato alla fine perchè si tratta di una moltiplicazione altrimenti avremmo passato lo 0