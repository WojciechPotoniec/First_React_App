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