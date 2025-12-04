// FIRST EXERCISE
/* // You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary */

/* // You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname. */

// SECOND EXERCISE
/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

/* let usersMapped = users.map(item => ({fullName: item.name + ' ' + item.surname, id: item.id})); */

// OR

/* let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id})); */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

/* alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith */

// THIRD EXERCISE
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users){
    users.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete */

// FOURTH EXERCISE
/* Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N. */

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users){
    const ages = users.map(item => item.age);

    let sum = 0;
    for (let i = 0; i < ages.length; i++){
        sum += ages[i];
    }

    return sum / ages.length;
} */

// OR

/* function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
} */

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// FIFTH EXERCISE
/* // Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values. */

/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr){
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(users);
console.log(usersById); */

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/* Such function is really handy when working with server data.

In this task we assume that id is unique. There may be no two array items with the same id.

Please use array .reduce method in the solution. */