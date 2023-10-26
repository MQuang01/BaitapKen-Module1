let arr = [2, 21, 33, 7, -9, 11, -5, 49, 12];
let count = 0;

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    // Kiểm tra từ 2 đến căn bậc hai của số
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Không phải số nguyên tố
        }
    }
    console.log(number)
    return true; // Là số nguyên tố
}

arr.forEach(function (number) {
    if (isPrime(number)) {
        count++;
    }
})


console.log(`Có ${count} số nguyên tố`) // `Co ${count} so nguyen to`                `