function randomize(arr) {
    let element = arr.length, temp, index;

// While there are elements in the array
    while (element > 0) {
// Select a random index
        index = Math.floor(Math.random() * element);
// Decrease element by 1
        element--;
// And swap the last element with it
        temp = arr[element];
        arr[element] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
let theArray = ['apple', 'banana', 'cantalope', 'dragon fruit', 'elderberry' , 'fig', 'grape', 'honeydew'];

console.log(randomize(theArray));