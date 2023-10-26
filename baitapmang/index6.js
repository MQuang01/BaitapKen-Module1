let arr = [0, -21, 7, 8, -9, 49, -5, 36, 84];
let count = 0;
let newArray = [];

arr.forEach(function (number) {
    if (number > 0 && number % 7 == 0) {
        if (newArray.includes(number)) {
            return
        } else {
            newArray.push(number);
            count++;
        }

    }
})
console.log(count)