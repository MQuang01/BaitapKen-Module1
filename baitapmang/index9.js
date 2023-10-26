let arr1 = [2, 21, 44, -9, 11, -8, 6, 10];
let arr2 = [1, 2, 3, 2, 1];
let arr3 = [ 1, 2, 3, 3, 2, 1];


function checkArr(arr) {
    // if (arr.length % 2 === 0) {
    //     return 1;
    // } else {
    //     return 0;
    // }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] != arr[arr.length - 1 - i]) {
            return 0;
        }
        return 1;
    }
}

console.log(checkArr(arr1));
console.log(checkArr(arr2));
console.log(checkArr(arr3));
