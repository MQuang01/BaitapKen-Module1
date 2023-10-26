let arr1 = [0, 7, 2, 5, 6, 20, 22]
let arr2 = [8, 6, 4, 10]

function checkOdd(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log("Hàm có số lẻ");
            return false
        }
    }
    console.log("Hàm không có số lẻ");
    return true
}

checkOdd(arr2)