let arr = [2, 3, 8, 9, 11, -5, 1]
let newArray = [];


let total = 0;
for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        total += arr[i];
    }
}

console.log(total);
console.log(arr);