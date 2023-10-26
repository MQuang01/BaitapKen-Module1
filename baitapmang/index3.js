let arr = [2, 3, 33, 8, 9, 11, -5, 48, 12];
let newArray = [];


function list(a,b){
    for(i = a; i <= b ; i++){
        newArray.push(arr[i])
    }
}

list(2, 6);
console.log(newArray);