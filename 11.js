// Check the repeated items in the array and return only the repeated
// [4, 3, 4, 5, 6, 5] -> [5]
const arr = [4, 3, 4, 5, 6, 5];

  var uniques = arr.filter((item, index)=> {
    console.log('index-->', index); // 0, 1, 2, 3, 4, 5
    console.log('indexOf-->', arr.indexOf(item)); // 0, 1, 0, 3, 4, 3

    return arr.indexOf(item) !== index; // 4, 5 return only the differents
  });

console.log(uniques);


/* indexOf
const arr = ['a','b','a', 'c', 'b'];
let result = [];

function indexes(arr) {
  arr.forEach((item)=> {
    console.log(item); // a, b, a
    console.log(arr.indexOf(item)) // 0, 1, 0, 3, 1 - because a is already founded in position 0 it will return position 0 always.
  });
}

indexes(arr);*/
