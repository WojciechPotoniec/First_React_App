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