let arr = [2, 3, -7, 9, 11, -5, 1];
let total = 0;

arr.forEach(function(number) {
    if (number > 0) {
        total += number;
    }
})
console.log(total)