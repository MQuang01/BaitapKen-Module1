let arr = [2, 3, 33, 8, -9, 11, -5, 5, 12];
let newArray = [];

for (i = 0 ; i< arr.length - 1; i++){
    if (Math.abs(arr[i]) > Math.abs(arr[i+1])){
        newArray.push(arr[i])
    }
}


console.log(newArray)