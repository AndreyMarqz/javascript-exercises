/* function sumOfTripleEvens(array){
    return array

    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumOfTripleEvens(array)); */

/* let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10 */

/* function copySorted(arr){
    return arr
        .slice()
        .sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes) */

/* function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

array = [1, 2, 3];

console.log(shuffle(array));

console.log(shuffle(array));

console.log(shuffle(array)); */

/* This method returns some values more than others, so a better algorithm called Fisher-Yates-shuffle sorts the array in the same proportion of possible results: */

/* function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
} */

/* function unique(arr) {
    return arr.filter((item, index, array) => {return array.indexOf(item) === index});
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O */

/* OR */

/* function unique(arr){
    let result = [];

    for(let str of arr){
        if (!result.includes(str)){
            result.push(str);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O */