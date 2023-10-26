let arr = [2, 3, 33, 8, 9, 11, -5, 48, 12];

arr.forEach(function (number){
    if (number % 3 == 0){
        let index = arr.indexOf(number);
        arr.splice(index, 1);
        arr.unshift(number);
    }
});

arr.reverse();
console.log(arr);